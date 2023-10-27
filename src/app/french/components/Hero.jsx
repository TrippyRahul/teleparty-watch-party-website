import React from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/1(1).png"
                alt="main"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles.headings}>
              <h1>
                Netflix teleparty est une extension fantastique qui vous permet
                de synchroniser et de regarder des vidéos
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                C&apos;est la meilleure façon de regarder les dernières
                émissions sur Teleparty. En utilisant cette extension, vous
                pouvez synchroniser la lecture et elle possède certaines des
                meilleures fonctionnalités, notamment le chat, les appels audio
                et vidéo. Ici, vous trouverez tous les services de streaming
                populaires tels que Disney Plus, Amazon Prime, Hulu, Netflix,
                Paramount et bien d&apos;autres, où vous pourrez parcourir les
                dernières émissions, films et séries. Alors, connectez-vous avec
                vos proches et créez votre propre salle de visionnage pour
                regarder ensemble.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.platform}>
        <h5>Teleparty is available on</h5>
        <ul>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/netflix.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/youtube.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hotstar.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hbo.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hulu.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/prime.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
