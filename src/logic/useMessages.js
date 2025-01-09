import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function useMessages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchMessages() {
            const { data: messagesData, error } = await supabase
                .from("messages")
                .select("*")
                .order("created_at", { ascending: true });

            if (error) {
                console.log("error fetching messages", error);
            } else {
                setMessages(messagesData);
            }
        }
        fetchMessages();
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
    }, []);

    return messages;
}

export default useMessages;