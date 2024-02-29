import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["left"]}>
            <div className={styles.videoContainer}>
              <video src="/stream.mp4" className={styles.video} controls autoPlay muted>
                <source type="/allScreen.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles.headings}>
              <h1>
                Discover an exciting approach to enjoying movies and series with
                watch party extension
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                It is a unique way to enjoy movies and series with this tool. By
                this, you can synchronize playback and chat and you can even
                audio and video call effortlessly with friends while immersing
                yourselves in popular streaming services like Disney plus watch
                party, amazon prime watch party, HBO max watch party, movies on
                paramount plus, peacock watch party, Netflix and hulu watch
                party.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["virtual-party"]}>
        <div className={styles.container}>
          <h2>
            Watch party extension is an amazing browser as it synchronizes the
            playback including movies and series.
          </h2>
          <p>
            Just explore the magic of movie nights as it will connect you with
            your loved ones. In this extension, you can create your own
            customized watching room. Have unlimited and immersive entertainment
            that will bring you and your buddy closer. You can also share your
            moments while watching your favorite shows.
          </p>
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
