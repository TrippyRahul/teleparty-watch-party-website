import React from "react";
import styles from "../styles/featuresAccordian.module.scss";
import Accordian from "./Accordian";

const Features = ({ data }) => {
  return (
    <div className={styles.features} id="features">
      <div className={styles.headings}>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.right}>
          <Accordian questions={data.questions} />
        </div>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            <video
              src="/features.mp4"
              className={styles.video}
              controls
              autoPlay
              muted
              id="features"
            >
              <source type="features/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
