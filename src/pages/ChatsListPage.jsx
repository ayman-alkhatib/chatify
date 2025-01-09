import { useEffect, useState } from "react";
import { supabase } from "../logic/supabase";
import ChatList from "../component/chatListPageComponents/ChatList";

function ChatsListPage({ userId }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    if (!userId) return;
    async function fetchFriends() {
      const { data, error } = await supabase
        .from("profiles")
        .select("friends_list")
        .eq("id", userId);

      if (error) console.error("Error fetching friends", error);

      if (data) setFriends(data[0].friends_list);
    }
    fetchFriends();
  }, [userId]);

  return (
    <div>
      <h1>Chats List</h1>
      <ChatList friends={friends} />
    </div>
  );
}

export default ChatsListPage;
