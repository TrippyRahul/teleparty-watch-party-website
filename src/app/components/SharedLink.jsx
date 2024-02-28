import React from "react";
import styles from "../styles/sharedLink.module.scss";
import Button from "@/app/components/Button";

const SharedLink = () => {
  return (
    <div className={styles.sharedLink} id="sharedLink">
      <div className={styles.headings}>
        <h2>
          Use the shared l t feasible to use the same account to host a
          Teleparty?
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            {" "}
            <video src="/video.mp4" className={styles.video} autoPlay muted>
              <source type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.desc}>
              <p>
                It is, indeed. A shared membership needs to be a part of a
                premium pricing plan that allows many users to access the
                streaming service for a party at once. Additionally, having a
                personal membership is advised to watch unlimited content on
                teleparty for chrome.
              </p>
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
