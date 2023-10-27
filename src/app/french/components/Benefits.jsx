import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Ayez la joie ultime de diffuser sur teleparty firefox</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Pour avoir la meilleure expérience, téléchargez et installez
                simplement l’extension. Vous trouverez ici une infinité
                d’émissions de télévision, de séries et de films. Dans cette
                extension, il existe des fonctionnalités intéressantes telles
                que le chat, les appels audio et vidéo, afin que vous puissiez
                partager vos réactions pendant la diffusion. Vous pouvez
                également créer votre salle de surveillance où vous pourrez
                faire une netflix party extension avec tes copains.
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
              src="/2(1).png"
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
