import styles from "./SwapBtns.module.css";
function SwapBtns({ isSignup, setIsSignup, setAnimate }) {
  return (
    <div className={styles.swapBtns}>
      <button
        style={isSignup ? {} : { opacity: 1, cursor: "default" }}
        onClick={() => {
          setIsSignup(false);
          setAnimate(true);
        }}
      >
        Login
      </button>
      <button
        style={isSignup ? { opacity: 1, cursor: "default" } : {}}
        onClick={() => {
          setIsSignup(true);
          setAnimate(true);
        }}
      >
        Sign up
      </button>
    </div>
  );
}

export default SwapBtns;
