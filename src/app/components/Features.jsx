import React from "react";
import styles from "../styles/featuresAccordian.module.scss";
import Accordian from "./Accordian";

const questions = [
  {
    id: 1,
    ques: "One for Everyone",
    ans: " Teleparty offers you access to multiple top streaming services, so you can enjoy an endless selection of entertainment. Netflix, Hulu, Disney+, Hotstar, Prime Video, HBO Max, Paramount Plus, and Peacock TV are all great options for viewing parties. As a result, you two or more can stream and enjoy anything you choose. For Netflix party chrome download, ensure that you have a stable internet connection and valid subscription",
  },
  {
    id: 2,
    ques: "Party Control Watch",
    ans: "In the end, it's up to you as the host whether or not you want to host the virtual watch party. The Only I Have Control button is accessible to the host of the party. You take charge by pressing that button. You can now use all of the controls to play, pause, fast-forward, rewind, or resume the video easily on netlix teleparty chrome",
  },
  {
    id: 3,
    ques: "Group Talk",
    ans: "Make more connections with your loved ones by watching the movies and TV shows you both enjoy. It gets even more entertaining when you get to share your thoughts and feelings with other people. Watch party participants can use the group chat feature to take part in group discussions. Emojis can also be used by users to express how they feel about the most thrilling scenes",
  },
  {
    id: 4,
    ques: "Worldwide Accessibility",
    ans: "Everyone has access to Teleparty Extension. It's also easily downloadable from anywhere in the world, so anybody can utilize it. With this extension, creating memories with loved ones becomes even more excellent. To use the Teleparty service if it isn't supported in your area, utilize a reliable VPN (Virtually Protected Network). Learn teleparty chrome extension download within a few easy steps by visiting our website",
  },
  {
    id: 5,
    ques: "Full HD Content Streaming",
    ans: "Teleparty is a performance-focused extension with high-resolution streaming and synchronization. It thus improves your streaming experience beyond all doubt. You may also view excellent movies and TV series online in high definition. You can watch the content in real-time sync and share it with your loved ones.",
  },
  {
    id: 6,
    ques: "Customization of Profiles",
    ans: "By personalizing your chat profile with the addon, you may add some fun to your virtual watch party. In addition, you have the option to select any avatar from the collection to use as your profile picture. Additionally, you can use humorous and cute nicknames on your teleparty extension chrome profile",
  },
  {
    id: 7,
    ques: "Compact Design",
    ans: "Many thanks to the entertainment-focused Teleparty extension as you can use all the amazing features and enjoyment for free",
  },
];
const Features = () => {
  return (
    <div className={styles.features} id="features">
      <div className={styles.headings}>
        <h2>Amazing Features Of Teleparty</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.right}>
          <Accordian questions={questions} />
        </div>
        <div className={styles.left}>
          <div className={styles.videoContainer}>
            <video src="/features.mp4" className={styles.video} controls autoPlay muted>
              <source type="features/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
