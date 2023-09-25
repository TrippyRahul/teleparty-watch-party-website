"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "./Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "como ver netflix con amigos",
    ans: "Simplemente descargue e instale la extensión en su navegador y busque Netflix. Después de eso, podrás ver todos los programas disponibles en él.",
  },
  {
    id: 2,
    ques: "¿Puedes verlo en grupo telefiesta?",
    ans: "Sí, definitivamente puedes mirar en grupo en Teleparty y tener la mejor experiencia.",
  },
  {
    id: 3,
    ques: "¿Puedes ver la fiesta en HBO Max?",
    ans: "Sí, simplemente abre HBO Max y selecciona tu programa preferido para verlo o también puedes compartirlo con tus amigos y familiares.",
  },
  {
    id: 4,
    ques: "¿Cómo ver una película en línea?",
    ans: "Es muy sencillo, sólo necesitas descargar e instalar la extensión en tu navegador. Ahora, ve a tu plataforma de streaming online preferida y mira una película. Recuerde que debe tener una cuenta y suscripción válida.",
  },
  {
    id: 5,
    ques: "¿Es de uso gratuito?",
    ans: "Sí, es de uso gratuito. Sólo necesitas tener una cuenta y una suscripción válidas.",
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
