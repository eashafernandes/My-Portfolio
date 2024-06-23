import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a Backend Developer with experience in building reliable
                and secure APIs along with efficiently contributing to Roadmap
                Development in Agile Environment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graphIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>DS, ML and AI</h3>
              <p>
                I also have a keen interest in the field of Data Science,
                Machine Learning and AI.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bookIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Quick Learner</h3>
              <p>
                I am always ready to learn new things, best example being this
                portfolio that I made from scratch using React, a Framework I
                have 0 experience in.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
