import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
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
            Watch Party extension is fantastic as it lets you synchronize and
            watch videos, including TV shows and movies.
          </h2>
          <p>
            Experience the magic of virtual movie nights, connecting with loved
            ones regardless of the distance. The best part is the ability to
            create your own personalized watching room, ensuring an
            uninterrupted and immersive entertainment experience that brings you
            and your friends closer together in the shared enjoyment of your
            favorite films and shows.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
