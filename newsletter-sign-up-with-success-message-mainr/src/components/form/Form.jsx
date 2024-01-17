/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setIsSubscribed(true);
  };

  return (
    <div className={styles.formContainer}>
      <h4 className={styles.emailAddress}> Email address</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@company.com"
        ></input>
        <button className={styles.button} onClick={handleClick}>
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default Form;
