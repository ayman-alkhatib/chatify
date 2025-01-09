import styles from "./Message.module.css";
function Message({ message, isSender, time }) {
  return (
    <div className={`${styles.msg} ${isSender ? styles.right : styles.left}`}>
      <div className={styles.msgImg}></div>
      <div className={styles.msgBubble}>
        <div className={styles.msgInfoTime}>{time}</div>
        <div className={styles.msgText}>{message}</div>
      </div>
    </div>
  );
}

export default Message;
