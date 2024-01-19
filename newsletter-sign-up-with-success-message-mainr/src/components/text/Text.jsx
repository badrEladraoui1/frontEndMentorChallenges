/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Text.module.css";

import check from "../../assets/images/icon-success.svg";

const Text = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.stayUpdated}>Stay updated !</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <div className={styles.textInfos}>
        <div className={styles.textInfo}>
          <img className={styles.checkSvg} src={check} alt="check-icon"></img>
          <p>Product discovery and building what matters</p>
        </div>
        <div className={styles.textInfo}>
          <img className={styles.checkSvg} src={check} alt="check-icon"></img>
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className={styles.textInfo}>
          <img className={styles.checkSvg} src={check} alt="check-icon"></img>
          <p>And much more!</p>
        </div>
      </div>
    </div>
  );
};

export default Text;
