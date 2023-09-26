import React from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/1(1).png"
                alt="main"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles.headings}>
              <h1>
                Teleparty Netflix ist eine fantastische Erweiterung, mit der Sie
                Videos synchronisieren und ansehen können
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                Dies ist die beste Möglichkeit, die neuesten Sendungen auf
                Teleparty anzusehen. Mit dieser Erweiterung können Sie die
                Wiedergabe synchronisieren und sie verfügt über einige der
                besten Funktionen, darunter Chat, Audio- und Videoanrufe. Hier
                finden Sie alle beliebten Streaming-Dienste wie Disney Plus,
                Amazon Prime, Hulu, Netflix, Paramount und viele mehr, bei denen
                Sie die neuesten Shows, Filme und Serien durchstöbern können.
                Vernetzen Sie sich also mit Ihren Lieben und schaffen Sie Ihren
                eigenen Beobachtungsraum watch together.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.platform}>
        <h5>Teleparty is available on</h5>
        <ul>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/netflix.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/youtube.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hotstar.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hbo.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hulu.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/prime.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
