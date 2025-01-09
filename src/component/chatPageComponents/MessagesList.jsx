import Message from "./Message";
import styles from "./MessagesList.module.css";
function MessagesList({ messages, chatListElementRef, senderId }) {
  function dateToTime(date) {
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <main className={styles.msgerChat} ref={chatListElementRef}>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.content}
          isSender={message.sender_id === senderId}
          time={dateToTime(new Date(message.created_at))}
        />
      ))}
    </main>
  );
}
export default MessagesList;
