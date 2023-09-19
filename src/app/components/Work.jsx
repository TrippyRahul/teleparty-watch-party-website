import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

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
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1e1e1e"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" x2="6" y1="4" y2="20" />
                <polygon points="10,4 20,12 10,20" />
              </svg>

              {step.text}
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
