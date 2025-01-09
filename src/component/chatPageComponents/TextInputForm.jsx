import { useState } from "react";
import { supabase } from "../../logic/supabase";
import { useParams } from "react-router";
import styles from "./TextInputForm.module.css";
function TextInputForm({ senderId }) {
  const [message, setMessage] = useState("");
  const receiverId = useParams().receiverId;

  const handleSendMessage = async (messageContent) => {
    if (!senderId) {
      console.error("User is not authenticated");
      return;
    }

    const { error } = await supabase.from("messages").insert([
      {
        sender_id: senderId,
        receiver_id: receiverId,
        content: messageContent,
      },
    ]);

    if (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form
      className={styles.msgerInputarea}
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage(message);
        setMessage("");
      }}
    >
      <input
        type="text"
        className={styles.msgerInput}
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button type="submit" className={styles.msgerSendBtn}>
        Send
      </button>
    </form>
  );
}

export default TextInputForm;
