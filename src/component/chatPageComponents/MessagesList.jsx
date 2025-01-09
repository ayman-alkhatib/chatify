import { useEffect, useRef } from "react";
import Message from "./Message";
import styles from "./MessagesList.module.css";
import dateToTime from "../../logic/dateToTime";
function MessagesList({ messages, senderId }) {
  const chatListElementRef = useRef(null);

  // Scroll to the bottom of the chat list when new messages are added
  useEffect(() => {
    if (chatListElementRef.current) {
      chatListElementRef.current.scrollTo({
        top: chatListElementRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

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
