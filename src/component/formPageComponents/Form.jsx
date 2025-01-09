import { useState } from "react";
import styles from "./Form.module.css";
import { supabase } from "../../logic/supabase";

import ErrorMessage from "./ErrorMessage";
import { formValidation } from "../../logic/formValidation";

function Form({ isSignup, animate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = formValidation(
      email,
      password,
      repeatPassword,
      isSignup
    );
    setErrors(validationErrors);
    let isValid = Object.keys(validationErrors).length === 0;

    if (isValid && isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: password,
      });
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }

    if (isValid && !isSignup) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error(error);
      }
    }
  };

  const arrowStyle = animate
    ? isSignup
      ? { animation: "arrowLift 500ms ease-in-out forwards " }
      : { animation: "arrowRight 500ms ease-in-out forwards" }
    : {};

  const buttonStyle = animate
    ? isSignup
      ? { animation: "translateDown 500ms ease-in-out forwards" }
      : { animation: "translateUp 500ms ease-in-out forwards" }
    : {};

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <span className={styles.arrow} style={arrowStyle}></span>
      <input
        value={email}
        onChange={(e) => {
          setErrors({});
          setEmail(e.target.value);
        }}
        type="text"
        id="email"
        placeholder="email"
      />
      <ErrorMessage error={errors.email} />
      <input
        value={password}
        onChange={(e) => {
          setErrors({});
          setPassword(e.target.value);
        }}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <ErrorMessage error={errors.password} />
      <input
        style={{ visibility: showRepeatPassword ? "visible" : "hidden" }}
        value={repeatPassword}
        onChange={(e) => {
          setErrors({});
          setRepeatPassword(e.target.value);
        }}
        type="Password"
        name="repeatPassword"
        placeholder="Repeat Password"
      ></input>
      <ErrorMessage error={errors.repeatPassword} />
      <button
        style={buttonStyle}
        onAnimationStart={() => {
          if (isSignup) setShowRepeatPassword(true);
          setEmail("");
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
