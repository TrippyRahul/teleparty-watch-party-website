import React from "react";
import styles from "../styles/featuresAccordian.module.scss";
import Accordian from "./Accordian";

const questions = [
  {
    id: 1,
    ques: "What is the purpose of Teleparty?",
    ans: " To watch a movie or show with a group of friends and family at the same time, you may start, stop, and pause it using the free Teleparty extension for Google Chrome",
  },
  {
    id: 2,
    ques: "How big of a watch party invite can I send out?",
    ans: "Teleparty allows up to 100 users to be in a room at once, but only for text chat. In addition to adding more eye-catching avatars and selecting a name for yourself, you can also add comment on everything you're viewing on teleparty google chrome    ",
  },
  {
    id: 3,
    ques: "How can I sign up for Teleparty?",
    ans: "Easily enough, joining the watch party is straightforward. Firstly, you should download and install the Teleparty extension, then access the streaming service that the host is planning the watch party for by logging in. Lastly, to easily participate, tap the link that the host supplied you for the invitation and watch latest movies and shows in high-definition on teleparty google chrome extension",
  },
];
const Features = () => {
  return (
    <div className={styles.features} id="features">
      <div className={styles.headings}>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.right}>
          <Accordian questions={questions} />
        </div>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            <video src="/allScreen.mp4" className={styles.video} controls autoPlay muted>
              <source type="/allScreen.mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
