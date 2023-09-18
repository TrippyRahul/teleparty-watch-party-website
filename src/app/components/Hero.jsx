"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgClass(styles["hero-mobile"]);
      } else {
        setBgClass(styles["hero-large"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`${styles.hero} ${bgClass}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>
                  Discover an exciting approach to enjoying movies and series
                  with watch party extension
                </h1>
              </div>
              <div className={styles.text}>
                <p>
                  It is a unique way to enjoy movies and series with this tool.
                  By this, you can synchronize playback and chat and you can
                  even audio and video call effortlessly with friends while
                  immersing yourselves in popular streaming services like Disney
                  plus watch party, amazon prime watch party, HBO max watch
                  party, movies on paramount plus, peacock watch party, Netflix
                  and hulu watch party.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
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
    </>
  );
};

export default Hero;
