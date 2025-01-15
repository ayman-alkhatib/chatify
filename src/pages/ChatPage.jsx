import styles from "./ChatPage.module.css";
import ChatPageHeader from "../component/chatPageComponents/ChatPageHeader.jsx";
import MessagesList from "../component/chatPageComponents/MessagesList.jsx";
import TextInputForm from "../component/chatPageComponents/TextInputForm.jsx";
import useMessages from "../logic/useMessages.js";
import useSession from "../logic/useSession.js";

function ChatPage() {
  const session = useSession();
  const userId = session?.user.id;
  const messages = useMessages(userId);

  return (
    <section className={styles.chatPage}>
      <ChatPageHeader />
      <MessagesList messages={messages} senderId={userId} />
      <TextInputForm senderId={userId} />
    </section>
  );
}

export default ChatPage;
