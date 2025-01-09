import styles from "./ChatPageHeader.module.css";
function ChatPageHeader() {
  return (
    <header className={styles.msgerHeader}>
      <div>
        <i className="fas fa-comment-alt"></i> SimpleChat
      </div>
      <div>
        <span>
          <i className="fas fa-cog"></i>
        </span>
      </div>
    </header>
  );
}

export default ChatPageHeader;
