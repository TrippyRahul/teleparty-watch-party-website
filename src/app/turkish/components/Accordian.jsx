"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "./Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Arkadaşlarla netflix nasıl izlenir?",
    ans: "Uzantıyı tarayıcınıza indirip yükleyin ve Netflix'i arayın. Bundan sonra mevcut tüm şovları izleyebilirsiniz.",
  },
  {
    id: 2,
    ques: "Telepartide grup izleme yapabilir misiniz?",
    ans: "Evet, kesinlikle telepartide grup izleme yapabilir ve bu konuda en iyi deneyimi yaşayabilirsiniz.",
  },
  {
    id: 3,
    ques: "Partiyi HBO Max'te izleyebilir misin?",
    ans: "Evet, HBO Max'i açın ve izlemek için tercih ettiğiniz programı seçin veya bunu arkadaşlarınız ve ailenizle de paylaşabilirsiniz.",
  },
  {
    id: 4,
    ques: "İnternetten film nasıl izlenir?",
    ans: "Çok basit, sadece uzantıyı tarayıcınıza indirip yüklemeniz gerekiyor. Şimdi tercih ettiğiniz çevrimiçi yayın platformuna gidin ve bir film izleyin. Geçerli bir hesabınızın ve aboneliğinizin olması gerektiğini unutmayın.",
  },
  {
    id: 5,
    ques: "Kullanımı ücretsiz mi?",
    ans: "Evet, kullanımı ücretsizdir. Sadece geçerli bir hesaba ve aboneliğe sahip olmanız yeterli.",
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
