import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useParams } from "react-router";

function useMessages(senderId) {
    const [messages, setMessages] = useState([]);
    const receiverId = useParams().receiverId;

    useEffect(() => {
        async function fetchMessages() {
            const { data: messagesData, error } = await supabase
                .from("messages")
                .select("*")
                .order("created_at", { ascending: true }).in("sender_id", [senderId, receiverId]).in("receiver_id", [senderId, receiverId]);

            if (error) {
                console.log("error fetching messages", error);
            } else {
                setMessages(messagesData);
            }
        }
        if (receiverId && senderId) {
            fetchMessages(senderId, receiverId);
        }

        const channels = supabase
            .channel("custom-all-channel")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "messages" },
                (payload) => {
                    switch (payload.eventType) {
                        case "INSERT":
                            setMessages((prevMessages) => [...prevMessages, payload.new]);
                            break;
                        case "DELETE":
                            setMessages((prevMessages) =>
                                prevMessages.filter((message) => message.id !== payload.old.id)
                            );
                            break;
                        default:
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channels);
        };
    }, [receiverId, senderId]);

    return messages;
}

export default useMessages;