import React from "react";
import styles from "../styles/UseTeleparty.module.scss";
import Button from "@/app/components/Button";

const UseTeleparty = () => {
  return (
    <div className={styles.useTeleparty} id="useTeleparty">
      <div className={styles.headings}>
        <h2>Use Teleparty To Start Your Party With Your Friends And Family</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.desc}>
              <p>
                Many families worldwide have their own ritual and tradition of
                movie nights. But when years pass, some family members settle in
                different states or countries. in such scenarios, uploading the
                movie night tradition gets a little tricky. If you belong to one
                such families and wishes to connect with your loved ones then
                Teleparty chrome is the solution you are looking for. Watch
                everything you want on Netflix, Hulu, Prime Video, HBP Max,
                Disney Plus, Peacock TV, and Paramount Plus, among other
                streaming services. Host virtual movie dates with your friends
                and family with an easy-to-use UI.
              </p>
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
