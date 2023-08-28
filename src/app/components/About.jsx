import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About Teleparty</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Teleparty is a fantastic extension, where you can watch movies
                together at the same time. It has great features like chat,
                audio and video calls which synchronizes playback on your
                browser. Create your fun memories with your family and friends.
              </p>
              <p>
                In this extension, you can watch netflix together as well as
                watch HBO Max with friends and family. Enjoy the latest series
                or movies on various platforms. Save your memory and share your
                thoughts while streaming your favorite content.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
