import React from "react";
import styles from "../styles/sharedLink.module.scss";
import Button from "@/app/components/Button";

const SharedLink = ({ data }) => {
  return (
    <div className={styles.sharedLink} id="sharedLink">
      <div className={styles.headings}>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            {" "}
            <video
              src="/video.mp4"
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
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.desc}>
              {data.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedLink;
