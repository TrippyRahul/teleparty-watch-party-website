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
              <h2>
                Disfruta del máximo placer de transmitir en línea Teleparty
                netflix
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Para tener la mejor experiencia, simplemente descargue e instale
                la extensión. Aquí encontrarás un sinfín de programas de
                televisión, series y películas. En esta extensión, hay
                excelentes funciones como chat, audio y videollamadas, para que
                puedas compartir tus reacciones mientras transmites. También
                puedes crear tu sala de observación donde puedas group watch Con
                tus amigos
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
