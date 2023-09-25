import React from "react";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>À propos de nous</h2>
            </div>
            <div className={styles.desc}>
              <p>
                TeIl s&apos;agit d&apos;une extension de navigateur étonnante où vous
                pouvez regarder tous vos films préférés ensemble en même temps
                et en téléchargeant l&apos;extension, elle se synchronisera
                automatiquement. Grâce à ses fonctionnalités exceptionnelles,
                notamment le chat, les appels audio et vidéo, vous pouvez
                partager vos réflexions tout en regardant une émission. Vous
                pouvez également créer des souvenirs amusants et précieux en
                organisant une salle de surveillance. Dans cette extension, vous
                pouvez diffuser toutes les dernières émissions de différentes
                plateformes.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
