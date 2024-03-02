import React from "react";
import styles from "../styles/featuresAccordian.module.scss";
import Accordian from "./Accordian";

const FrequentlyAsked = ({ questions, title }) => {
  return (
    <div className={styles.features} id="features">
      <div className={styles.headings}>
        <h2>{title || "Frequently Asked Questions"}</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.right}>
          <Accordian questions={questions} />
        </div>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            <video
              src="/allScreen.mp4"
              className={styles.video}
              controls
              autoPlay
              muted
            >
              <source type="/allScreen.mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
