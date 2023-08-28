import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How to watch movies together online on teleparty?</h2>
        <h3>
          To watch movies together on teleparty, you can follow these steps:
        </h3>

        <ul className={styles.content}>
          <li>Install the extension to your Firefox browser</li>
          <li>
            Now go to any of your favorite streaming platforms like Netflix,
            Disney Plus, and many more to{" "}
            <span> select the show which you want to watch.</span>
          </li>
          <li>
            <span>Start playing </span> the video and click on the teleparty
            icon
          </li>
          <li>
            Generate a unique <span> party link </span>
          </li>
          <li>
            <span> Share the link </span> with your friends and family
          </li>
          <li>
            <span>Join the party</span>
          </li>
          <li>
            It has amazing features including{" "}
            <span> chat, audio, and video calls </span>
          </li>
        </ul>

        <p>
          If you are in the party mode to watch good movies with friends then
          please follow the below instructions.
        </p>
      </div>
    </div>
  );
};

export default Work;
