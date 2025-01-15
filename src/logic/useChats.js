import { useEffect, useState } from "react";
import useSession from "./useSession";
import { supabase } from "./supabase";

function useChats() {
    const [chats, setChats] = useState([]);
    const session = useSession();
    const userId = session?.user.id;

    useEffect(() => {
        if (!userId) return;
        async function fetchChats() {
            const { data, error } = await supabase.rpc("get_chats", {
                user_id: userId,
            });

            if (error) console.error("Error fetching friends", error);

            if (data) setChats(data);
        }
        fetchChats();


        const channels = supabase
            .channel("custom-all-channel")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "chats" },
                (payload) => {
                    switch (payload.eventType) {
                        case "INSERT":
                            fetchChats()
                            break;
                        case "UPDATE":
                            fetchChats()
                            break;
                        case "DELETE":
                            fetchChats()
                            break;
                        default:
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channels);
        };
    }, [userId]);

    return chats
}

export default useChats
