/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Thanks.module.css";

import img from "../../assets/images/icon-success.svg";

const Thanks = ({ emailToThanks }) => {
  return (
    <div className={styles.thanks}>
      <div className={styles.innerContainer}>
        <img src={img} className={styles.img} />
        <h1 className={styles.h1}>Thanks for subscribing!</h1>
        <p className={styles.p}>
          A confirmation email has been sent to{" "}
          <span className={styles.span}>{emailToThanks}</span> Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button className={styles.button}>Dismiss message</button>
      </div>
    </div>
  );
};

export default Thanks;
