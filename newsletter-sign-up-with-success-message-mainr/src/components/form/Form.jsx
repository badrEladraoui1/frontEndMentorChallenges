/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import emailjs from "@emailjs/browser";

//uTP_0eUZdxlCh8VTs
//service_y9h5hak
//template_pnq4hsz

const Form = ({ onIsSubscribedToTrue, onGetEmailFromForm }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("uTP_0eUZdxlCh8VTs"), []);

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const testing = emailRegex.test(email);
    if (testing) {
      const name = email.split("@").slice(0, 1).join();
      setName(name);
      console.log(name);
    }
    return testing;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailResult = checkEmail();
    if (emailResult) {
      onIsSubscribedToTrue(true);
      setIsEmailValid(true);
      onGetEmailFromForm(email);

      const serviceId = "service_y9h5hak";
      const templateId = "template_pnq4hsz";

      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
          name: name,
          email: email,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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
