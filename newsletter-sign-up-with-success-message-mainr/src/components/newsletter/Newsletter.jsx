/* eslint-disable no-unused-vars */
import Text from "../text/Text";
import Form from "../form/Form";

import img from "../../assets/images/illustration-sign-up-desktop.svg";

import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <div className={styles.textAndForm}>
          <Text />
          <Form />
        </div>
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Newsletter;
