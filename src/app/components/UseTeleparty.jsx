import React from "react";
import styles from "../styles/UseTeleparty.module.scss";
import Button from "@/app/components/Button";

const UseTeleparty = ({ data }) => {
  return (
    <div className={styles.useTeleparty} id="useTeleparty">
      <div className={styles.headings}>
        <h1>{data?.title}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.desc}>
              <p>{data?.desc}</p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            <video
              src="/posters.mp4"
              className={styles.video}
              autoPlay
              muted
              controls
            >
              <source type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseTeleparty;
