/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Text from "../text/Text";
import Form from "../form/Form";

import img from "../../assets/images/illustration-sign-up-desktop.svg";

import styles from "./Newsletter.module.css";

const Newsletter = ({ onIsSubscribedToTrue }) => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <div className={styles.textAndForm}>
          <Text />
          <Form onIsSubscribedToTrue={onIsSubscribedToTrue} />
        </div>
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Newsletter;
