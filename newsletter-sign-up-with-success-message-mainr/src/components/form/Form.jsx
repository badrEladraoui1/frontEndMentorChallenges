/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onIsSubscribedToTrue, onGetEmailFromForm }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailResult = checkEmail();
    if (emailResult) {
      onIsSubscribedToTrue(true);
      setIsEmailValid(true);
      onGetEmailFromForm(email);
    } else setIsEmailValid(false);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.emailInfos}>
        <h4 className={styles.emailAddress}>Email address</h4>
        {!isEmailValid && (
          <span className={styles.invalidEmail}>Invalid Email</span>
        )}
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@company.com"
        ></input>
        <button className={styles.button}>
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default Form;
