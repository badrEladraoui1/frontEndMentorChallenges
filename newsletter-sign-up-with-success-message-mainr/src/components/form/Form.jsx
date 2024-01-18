/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onIsSubscribedToTrue }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isEmailValid, setisEmailValid] = useState(false);
  // const message = <p>Valid email required</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailResult = checkEmail();
    emailResult
      ? onIsSubscribedToTrue(true) && setisEmailValid(true)
      : console.log("invalid");
  };

  const handleClick = () => {
    setIsSubscribed(true);
  };

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={styles.formContainer}>
      <h4 className={styles.emailAddress}>
        {" "}
        Email address { !isEmailValid ? <p>Valid email required</p> : ""}
      </h4>
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
