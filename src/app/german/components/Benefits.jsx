import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>
                Genießen Sie das ultimative Streaming-Vergnügen teleparty chrome
                and firefox
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Um das beste Erlebnis zu haben, laden Sie einfach die
                Erweiterung herunter und installieren Sie sie. Hier finden Sie
                endlose Fernsehsendungen, Serien und Filme. In dieser
                Erweiterung gibt es tolle Funktionen wie Chat, Audio- und
                Videoanrufe, sodass Sie Ihre Reaktionen während des Streamings
                teilen können. Sie können auch Ihren Beobachtungsraum
                einrichten, in dem Sie mit Ihren Freunden Netflix Partys machen
                können.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
