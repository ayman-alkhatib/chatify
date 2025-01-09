import { useNavigate } from "react-router";
import styles from "./ChatListItem.module.css";
function ChatListItem({ friend, status }) {
  const navigate = useNavigate();
  return (
    <li
      className={styles.chatListItem}
      onClick={() => navigate(`/chatPage/${friend.id}`)}
    >
      <img
        src="https://a0.anyrgb.com/pngimg/1980/1942/pessoa-brussel-address-icon-user-profile-windows-10-login-avatar-person-user-icons.png"
        alt="avatar"
      />
      <div className={styles.info}>
        <div className={styles.name}>{friend.username}</div>
        <div className={styles.status}>
          <span className={`${styles.icon} ${status}`}></span>
          {status}
        </div>
      </div>
    </li>
  );
}

export default ChatListItem;
