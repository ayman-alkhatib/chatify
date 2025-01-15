import styles from "./LoginPage.module.css";
import { useState } from "react";
import Form from "../component/formPageComponents/Form";
import SwapBtns from "../component/formPageComponents/SwapBtns";
import useSession from "../logic/useSession";
import { useNavigate } from "react-router";
import { routes } from "../logic/router";
function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const session = useSession();

  if (session) {
    navigate(routes.chatsListPage);
  }

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
