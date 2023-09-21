import React from "react";
import styles from "../styles/work.module.scss";

const steps = [
  { id: 1, text: "Install the extension to your Firefox browser" },
  {
    id: 2,
    text: " Now go to any of your favorite streaming platforms like Netflix, Disney Plus, and many more to select the show which you want to watch.",
  },
  {
    id: 3,
    text: "Start playing the video and click on the teleparty icon",
  },
  {
    id: 4,
    text: " Generate a unique party link ",
  },
  {
    id: 5,
    text: " Share the link with your friends and family",
  },
  {
    id: 6,
    text: "Join the party",
  },
  {
    id: 7,
    text: "It has amazing features including chat, audio, and video calls ",
  },
];

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How to watch movies together online on teleparty?</h2>
        <h3>
          To watch movies together on teleparty, you can follow these steps:
        </h3>

        <ul className={styles.content}>
          {steps.map((step, index) => (
            <li key={step.id}>
              {index + 1}. {step.text}
            </li>
          ))}
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
