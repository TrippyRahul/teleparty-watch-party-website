import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Time sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  If you want to see a movie with your loved ones
                  simultaneously, you can do so by logging in at the same time.
                  This allows you to benefit from fast buffering and
                  high-definition video quality. Get ready to have a stream
                  party with your friends and family!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Create your viewing party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Use this tool to create a movie party with friends and loved
                ones. View unlimited movies and shows together in a virtual
                space with synchronized playback, real-time chat, and HD video
                quality. Share laughter, excitement, and unforgettable moments,
                no matter the distance, and create cherished memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
