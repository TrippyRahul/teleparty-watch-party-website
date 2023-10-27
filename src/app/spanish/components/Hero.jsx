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
                Teleparty extension es una fantástica extensión que te permite
                sincronizar y ver vídeos
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                Es la mejor manera de ver los últimos programas en teleparty. Al
                usar esta extensión, puede sincronizar la reproducción y tiene
                algunas de las mejores funciones, como chat, audio y
                videollamadas. Aquí encontrará todos los servicios de
                transmisión populares, como Disney Plus, Amazon Prime, Hulu,
                Netflix, Paramount y muchos más, donde podrá explorar los
                últimos programas, películas y series. Entonces, conéctate con
                tus seres queridos y crea tu propia sala de observación para
                watch together.
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
