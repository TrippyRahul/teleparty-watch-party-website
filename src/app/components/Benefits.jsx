import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Indulge yourself in the ultimate joy of streaming</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Just download the extension, and watch amazing shows to enjoy
                unlimited TV series and movies. In this browser, you will find
                popular streaming platforms including netflix, teleparty Hulu,
                amazon prime watch party, HBO max, movies on paramount plus,
                peacock watch party, hulu watch party and Disney plus watch
                party.
              </p>
              <p>
                The extension has great features like audio & video calls along
                with chat. Create your own watching room to share your special
                moments with your close ones.
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

export default Benefits;
