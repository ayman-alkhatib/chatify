import styles from "./ChatPage.module.css";
import ChatPageHeader from "../component/chatPageComponents/ChatPageHeader.jsx";
import MessagesList from "../component/chatPageComponents/MessagesList.jsx";
import TextInputForm from "../component/chatPageComponents/TextInputForm.jsx";
import useMessages from "../logic/useMessages.js";

function ChatPage({ senderId }) {
  const messages = useMessages(senderId);

  return (
    <section className={styles.chatPage}>
      <ChatPageHeader />
      <MessagesList messages={messages} senderId={senderId} />
      <TextInputForm senderId={senderId} />
    </section>
  );
}

export default ChatPage;
