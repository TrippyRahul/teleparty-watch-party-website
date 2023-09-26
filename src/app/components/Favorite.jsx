import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/3(1).png"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Watch Together</h2>{" "}
            </div>
            <div className={styles.desc}>
              <p>
                Just logging together and share the link with your loved ones in
                order to have stream party fun. It will also help in the fast
                buffering and high-quality video.
              </p>
            </div>
            <div className={styles.headings}>
              <h2>Customize your viewing party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                This is an awesome tool to organize a movie party with your
                family and friends to view unlimited movies and series together
                with synchronized playback feature and also have real-time chat,
                audio,video calls in HD quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
