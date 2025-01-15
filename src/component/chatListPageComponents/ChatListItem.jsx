import { useNavigate } from "react-router";
import styles from "./ChatListItem.module.css";
import { routes } from "../../logic/router";
function ChatListItem({ chat, status }) {
  const navigate = useNavigate();
  return (
    <li
      className={styles.chatListItem}
      onClick={() => navigate(`${routes.chatPage}/${chat.id}`)}
    >
      <img src={chat.avatar} alt="avatar" />
      <div className={styles.info}>
        <div className={styles.name}>{chat.username}</div>
        <div className={styles.status}>
          <span
            className={`${styles.icon} ${
              status === "online" ? styles.online : styles.offline
            }`}
          ></span>
          {status}
        </div>
      </div>
    </li>
  );
}

export default ChatListItem;
