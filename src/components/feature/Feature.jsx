import styles from "./feature.module.scss";

const Feature = ({ title, text, className }) => {
  return (
    <div
      className={`${styles["gpt3__features-container__feature"]} ${styles[className]}`}
    >
      <div className={styles["gpt3__features-container__feature-title"]}>
        <div className={styles.empty} />
        <h1>{title}</h1>
      </div>
      <div className={styles["gpt3__features-container__feature-text"]}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
