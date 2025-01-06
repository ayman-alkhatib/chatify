import styles from "./LoginPage.module.css";
import { useState } from "react";
import Form from "../component/formPageComponents/Form";
import SwapBtns from "../component/formPageComponents/SwapBtns";

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [animate, setAnimate] = useState(false);

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <SwapBtns
          isSignup={isSignup}
          setIsSignup={setIsSignup}
          setAnimate={setAnimate}
        />
        <Form animate={animate} setAnimate={setAnimate} isSignup={isSignup} />
      </div>
    </div>
  );
}

export default LoginPage;
