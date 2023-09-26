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
              <h2>Sobre nós</h2>
            </div>
            <div className={styles.desc}>
              <p>
                É um navegador incrível netflix party extension onde você pode
                assistir todos os seus filmes favoritos ao mesmo tempo e
                baixando a extensão ela será sincronizada automaticamente. Com
                seus excelentes recursos, incluindo bate-papo, chamadas de áudio
                e vídeo, você pode compartilhar suas ideias enquanto assiste a
                um programa. Você também pode criar memórias divertidas e
                valiosas organizando uma sala de observação. Nesta extensão,
                você pode transmitir todos os programas mais recentes de várias
                plataformas.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/4(1).png"
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
