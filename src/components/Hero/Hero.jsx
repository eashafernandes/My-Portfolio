import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Easha Fernandes</h1>
        <p className={styles.description}>
        I am a Software Developer with over 2 years of work experience using NodeJS and Python. 
        Reach out if would like to get to know me!
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=easha.ferns@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
