import React from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/mainphoto.png"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles.headings}>
              <h1>
                Teleparty é uma extensão fantástica que permite sincronizar e
                assistir vídeos
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                É a melhor maneira de assistir aos últimos programas do
                telefesta. Ao usar esta extensão, você pode sincronizar a
                reprodução e possui alguns dos melhores recursos, incluindo
                chat, áudio e chamadas de vídeo. Aqui você encontrará todos os
                serviços de streaming populares, como Disney Plus, Amazon Prime,
                Hulu, Netflix, Paramount e muitos mais, onde poderá navegar
                pelos programas, filmes e séries mais recentes. Então,
                conecte-se com seus entes queridos e crie sua própria sala de
                observação para watch together.
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
