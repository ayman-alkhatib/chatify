import ChatListItem from "./ChatListItem";
import styles from "./ChatList.module.css";
function ChatList({ chats }) {
  return (
    <ul className={styles.chatList}>
      {chats.map((chat) => {
        return <ChatListItem key={chat.id} chat={chat} status={"online"} />;
      })}
    </ul>
  );
}

export default ChatList;
