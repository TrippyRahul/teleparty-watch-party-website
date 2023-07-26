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
                This browser extension lets you stream movies and series
                together with your loved ones at the same time, even if you&apos;re
                far apart. It has chat, audio, and video call features, so you
                can react and enjoy the content together in real time. The
                extension synchronizes playback on your browsers, making it easy
                to share the entertainment experience with others.
              </p>
              <p>
                This extension is a great tool to watch netflix together with
                your best buddies along with the other streaming platforms.It
                also supports watch HBO Max with friends, even if you&apos;re far
                away from each other. It creates a sense of closeness and shared
                experience, bringing people closer together while enjoying their
                favorite shows and movies.
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
