import { Article } from "../../components";
import styles from "./blog.module.scss";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className={`${styles["gpt3__blog"]} section__padding`} id="blog">
      <div className={styles["gpt3__blog-heading"]}>
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className={styles["gpt3__blog-container"]}>
        <div className={styles["gpt3__blog-container_gridView"]}>
          <div className={styles["article-container-1"]}>
            <Article
              imgUrl={blog01}
              className='firstArticle'
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className={styles["article-container-2"]}>
            <Article
              imgUrl={blog02}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className={styles["article-container-3"]}>
            <Article
              imgUrl={blog03}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className={styles["article-container-4"]}>
            {" "}
            <Article
              imgUrl={blog04}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className={styles["article-container-5"]}>
            <Article
              imgUrl={blog05}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
