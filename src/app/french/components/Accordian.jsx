"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Comment regarder Netflix entre amis ? ",
    ans: "Téléchargez et installez simplement l'extension sur votre navigateur et recherchez Netflix. Après cela, vous pouvez y regarder toutes les émissions disponibles. ",
  },
  {
    id: 2,
    ques: "Pouvez-vous regarder en groupe sur Teleparty ?",
    ans: "Oui, vous pouvez certainement regarder en groupe sur Teleparty et profiter du meilleur watch party netflix dessus.",
  },
  {
    id: 3,
    ques: "Pouvez-vous regarder la fête sur HBO Max ?",
    ans: "Oui, ouvrez simplement HBO Max et sélectionnez votre émission préférée à regarder ou vous pouvez également la partager avec vos amis et votre famille.     ",
  },
  {
    id: 4,
    ques: "Comment regarder un film en ligne ?",
    ans: " C'est très simple, il vous suffit de télécharger et d'installer l'extension sur votre navigateur. Maintenant, accédez à votre plateforme de streaming en ligne préférée et regardez un film. N'oubliez pas que vous devez disposer d'un compte et d'un abonnement valides.",
  },
  {
    id: 5,
    ques: "L'utilisation est-elle gratuite ?",
    ans: "Oui, son utilisation est gratuite. Il vous suffit d’avoir un compte et un abonnement valides.",
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
