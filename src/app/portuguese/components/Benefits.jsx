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
                Tenha a maior alegria de transmitir festa netflix extensão
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Para ter a melhor experiência, basta baixar e instalar a
                extensão. Aqui você encontrará inúmeros programas de TV, séries
                e filmes. Nesta extensão, existem ótimos recursos como chat,
                chamadas de áudio e vídeo, para que você possa compartilhar suas
                reações durante a transmissão. Você também pode criar sua sala
                de observação onde você pode watch party netflix com seus
                amigos.
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
