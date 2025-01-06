import { useState } from "react";
import styles from "./Form.module.css";

useState;
function Form({ isSignup, animate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errors, setErrors] = useState({});

  let isValid = Object.keys(errors).length === 0;

  function usernameValidate() {
    const validUsername = /^[0-9A-Za-z]{4,16}$/;

    if (!validUsername.test(username)) {
      setErrors((errors) => ({
        ...errors,
        username:
          "Your Username is not valid. Only characters and numbers are acceptable",
      }));
      isValid = false;
    }
  }
  function passwordValidate() {
    if (password.length < 6) {
      setErrors((errors) => ({
        ...errors,
        password: "Password must be at least 6 characters long",
      }));
      isValid = false;
    }
  }
  function passwordMatch() {
    if (isSignup && password !== repeatPassword) {
      setErrors((errors) => ({
        ...errors,
        repeatPassword: "Passwords do not match",
      }));
      isValid = false;
    }
  }
  function formValidation() {
    usernameValidate();
    passwordValidate();
    passwordMatch();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation();
    if (isValid && isSignup) {
      console.log("User created");
      console.log(
        `Username: ${username}, Password: ${password}, Repeat Password: ${repeatPassword}`
      );
    }
    if (isValid && !isSignup) {
      console.log("User logged in");
      console.log(`Username: ${username}, Password: ${password}`);
    }
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <span
        className={styles.arrow}
        style={
          animate
            ? isSignup
              ? { animation: "arrowLift 500ms ease-in-out forwards " }
              : { animation: "arrowRight 500ms ease-in-out forwards" }
            : {}
        }
      ></span>
      <input
        value={username}
        onChange={(e) => {
          setErrors({});
          setUsername(e.target.value);
        }}
        onBlur={usernameValidate}
        type="text"
        id="username"
        placeholder="username"
      />
      {errors.username && <p className={styles.error}>{errors.username}</p>}
      <input
        value={password}
        onChange={(e) => {
          setErrors({});
          setPassword(e.target.value);
        }}
        onBlur={passwordValidate}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}

      <input
        style={{ visibility: showRepeatPassword ? "visible" : "hidden" }}
        value={repeatPassword}
        onChange={(e) => {
          setErrors({});
          setRepeatPassword(e.target.value);
        }}
        onBlur={passwordMatch}
        type="Password"
        name="repeatPassword"
        placeholder="Repeat Password"
      ></input>
      {errors.repeatPassword && (
        <p className={styles.error}>{errors.repeatPassword}</p>
      )}
      <button
        style={
          animate
            ? isSignup
              ? { animation: "translateDown 500ms ease-in-out forwards" }
              : { animation: "translateUp 500ms ease-in-out forwards" }
            : {}
        }
        onAnimationStart={() => {
          if (isSignup) setShowRepeatPassword(true);
          setUsername("");
          setPassword("");
          setRepeatPassword("");
          setErrors({});
        }}
        onAnimationEnd={() => {
          if (!isSignup) setShowRepeatPassword(false);
        }}
      >
        {isSignup ? "SIGN UP" : "Login"}
      </button>
    </form>
  );
}

export default Form;
