"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "./Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Como assistir Netflix com amigos?",
    ans: "Basta baixar e instalar a extensão no seu navegador e procurar Netflix. Depois disso, você poderá assistir a todos os programas disponíveis nele.",
  },
  {
    id: 2,
    ques: "Você pode agrupar assistir juntos sobre telefesta?",
    ans: "Sim, você pode definitivamente assistir em grupo na teleparty e ter a melhor experiência com isso.",
  },
  {
    id: 3,
    ques: "Você pode assistir à festa no HBO Max?",
    ans: "Sim, basta abrir o HBO Max e selecionar seu programa preferido para assistir ou você também pode compartilhá-lo com seus amigos e familiares.",
  },
  {
    id: 4,
    ques: "Como assistir a um filme online?",
    ans: "É muito simples, basta baixar e instalar a extensão no seu navegador. Agora, acesse sua plataforma de streaming online preferida e assista a um filme. Lembre-se de que você deve ter uma conta e assinatura válidas.",
  },
  {
    id: 5,
    ques: "O uso é gratuito?",
    ans: "Sim, é de uso gratuito. Você só precisa ter uma conta e assinatura válidas.",
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
