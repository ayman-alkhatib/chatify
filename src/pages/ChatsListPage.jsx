import { useState } from "react";
import { supabase } from "../logic/supabase";
import ChatList from "../component/chatListPageComponents/ChatList";
import useChats from "../logic/useChats";

function ChatsListPage() {
  const chats = useChats();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  async function searchUsers(search) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .ilike("username", `%${search}%`);

    if (error) {
      console.error("Error searching users", error);
    }

    if (data) {
      setSearchResults(
        data.filter((user) => !chats.map((chat) => chat.id).includes(user.id))
      );
    }
  }

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
          <ChatList chats={searchResults} />
          <button>add friend</button>
        </div>
      )}
    </div>
  );
}

export default ChatsListPage;
