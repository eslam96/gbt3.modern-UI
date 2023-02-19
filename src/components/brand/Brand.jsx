import styles from "./brand.module.scss";
import { google, slack, atlassian, dropbox, shopify } from "./import";

import React from "react";

const Brand = () => {
  return (
    <div className={`${styles["gpt3__brand"]} section__padding`}>
      <div className={styles["gpt3__brand-item"]}>
        <img src={google} alt="google" />
      </div>
      <div className={styles["gpt3__brand-item"]}>
        <img src={slack} alt="slack" />
      </div>
      <div className={styles["gpt3__brand-item"]}>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className={styles["gpt3__brand-item"]}>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className={styles["gpt3__brand-item"]}>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
