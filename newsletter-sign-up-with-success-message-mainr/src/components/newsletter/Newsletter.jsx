/* eslint-disable no-unused-vars */
import Text from "../text/Text";
import Form from "../form/Form";

import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles}>
      <div className={styles}>
        <Text />
        <Form />
      </div>
    </div>
  );
};

export default Newsletter;
