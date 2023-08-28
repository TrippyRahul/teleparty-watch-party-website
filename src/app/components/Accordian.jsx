"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Can you watch Party on netflix?",
    ans: " Yes, you can view the party on Netflix. It’s just you need to install the Netflix Chrome extension and log in with your valid account. You can also invite friends on netflix.",
  },
  {
    id: 2,
    ques: "How to watch a movie with friends online?",
    ans: "Simply install the extension and log in together to stream your favorite series or movies. It synchronizes the playback.",
  },
  {
    id: 3,
    ques: "How to use teleparty extension?",
    ans: "It is a quick process. Just download and install the extension to your web browser to explore the hub of movies from various streaming platforms. ",
  },
  {
    id: 4,
    ques: "How to watch HBO Max with family and friends? ",
    ans: "Download and install the extension to your web browser. Now click on hbomax login  to explore the available movies and shows for group watch hbo max.",
  },
  {
    id: 5,
    ques: "Can you group watch in this extension",
    ans: "Yes, you can invite your friends to view together. As there are many streaming platforms. It’s just you need to have a valid account. So, don’t be late and get ready to youtube watch together with your loved ones. ",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./add-logo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
