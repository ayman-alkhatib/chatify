import { useEffect, useState } from "react";
import { supabase } from "../logic/supabase";
import ChatList from "../component/chatListPageComponents/ChatList";

function ChatsListPage({ userId }) {
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function searchUsers(search) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .ilike("username", `%${search}%`);

    if (error) console.error("Error searching users", error);

    setSearchResults(
      data.filter((user) => !chats.map((chat) => chat.id).includes(user.id))
    );
  }

  useEffect(() => {
    if (!userId) return;
    async function fetchFriends() {
      const { data, error } = await supabase.rpc("get_chats", {
        user_id: userId,
      });

      if (error) console.error("Error fetching friends", error);

      if (data) setChats(data);
    }
    fetchFriends();
  }, [userId]);

  return (
    <div>
      <h1>Chats List</h1>
      <input
        type="text"
        placeholder="Search for friends"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchUsers(e.target.value);
        }}
      />
      <ChatList chats={chats} />

      {search.length > 0 && (
        <div className="searchResults">
          <h2>Search Results</h2>
          <ChatList friends={searchResults} />
          <button>add friend</button>
        </div>
      )}
    </div>
  );
}

export default ChatsListPage;
