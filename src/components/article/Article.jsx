import styles from "./article.module.scss";

const Article = ({ imgUrl, date, title, className }) => {
  return (
    <div className={`${styles["gpt3__article"]} ${styles[className]}`}>
      <div className={styles["gpt3__article-image"]}>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className={styles["gpt3__article-content"]}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
