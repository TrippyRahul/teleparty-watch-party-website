"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Wie kann man Netflix mit Freunden schauen?",
    ans: "Laden Sie einfach die Erweiterung herunter, installieren Sie sie in Ihrem Browser und suchen Sie nach Netflix. Danach können Sie alle verfügbaren Sendungen darauf ansehen.",
  },
  {
    id: 2,
    ques: "Kann man per Teleparty Gruppenvideos ansehen?",
    ans: "Ja, Sie können auf jeden Fall Gruppenvideos auf Teleparty ansehen und dabei die beste Stream Party veranstalten.",
  },
  {
    id: 3,
    ques: "Kannst du die Party auf HBO Max sehen? ",
    ans: "Ja, öffnen Sie einfach HBO Max und wählen Sie Ihre bevorzugte Sendung aus, die Sie ansehen möchten, oder Sie können sie auch mit Ihren Freunden und Ihrer Familie teilen.",
  },
  {
    id: 4,
    ques: "Wie kann man einen Film online ansehen?",
    ans: "Es ist sehr einfach, Sie müssen lediglich die Erweiterung herunterladen und in Ihrem Browser installieren. Gehen Sie jetzt zu Ihrer bevorzugten Online-Streaming-Plattform und schauen Sie sich einen Film an. Denken Sie daran, dass Sie über ein gültiges Konto und Abonnement verfügen sollten.",
  },
  {
    id: 5,
    ques: "Ist die Nutzung kostenlos?",
    ans: "Ja, die Nutzung ist kostenlos. Sie benötigen lediglich ein gültiges Konto und Abonnement.",
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
        <h2>FAQ</h2>

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
