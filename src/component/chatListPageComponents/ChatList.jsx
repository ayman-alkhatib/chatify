import ChatListItem from "./ChatListItem";
import styles from "./ChatList.module.css";
function ChatList({ friends }) {
  return (
    <ul className={styles.chatList}>
      {friends.map((friend) => {
        return (
          <ChatListItem key={friend.id} friend={friend} status={"online"} />
        );
      })}
    </ul>
  );
}

export default ChatList;
