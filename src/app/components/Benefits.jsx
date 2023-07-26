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
              <h2>
                Indulge in the ultimate joy of streaming your favorite shows
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                You can have amazing shows and enjoy them with friends by simply
                downloading the extension. It has some popular streaming
                platforms like netflix, teleparty Hulu, amazon prime watch
                party, HBO max, movies on paramount plus, peacock watch party,
                hulu watch party and Disney plus watch party.
              </p>
              <p>
                It has great features like you can have a chat or even you can
                make audio or video calls while watching a movie. You can also
                create your watching room and share your thoughts with your
                friends and family.
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
