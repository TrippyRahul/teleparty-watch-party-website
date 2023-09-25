import React from "react";
import styles from "@/app/styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Assistir Netflix simultaneamente</h2>{" "}
            </div>
            <div className={styles.desc}>
              <p>
                Nesta extensão, você também pode criar sua própria sala de
                exibição onde poderá compartilhar reações em tempo real enquanto
                assiste ao seu filme favorito. Mas para ter essa experiência
                você precisa baixar a extensão no seu navegador e depois disso
                ela será sincronizada automaticamente. Pelo qual você e seus
                amigos podem transmitir ao mesmo tempo. É só que vocês dois
                precisam fazer login na hora exata. Possui a melhor qualidade HD
                para dar a sensação de que você está assistindo a um filme no
                cinema. Você também pode organizar uma festa onde poderá
                convidar tantos amigos quanto possível.
              </p>
            </div>
            <div className={styles.headings}>
              <h2>como assistir netflix com os amigos </h2>
            </div>
            <div className={styles.desc}>
              <p>
                É um processo muito fácil e simples. Primeiro, vá em seu
                navegador e procure a extensão Teleparty e, em seguida, baixe e
                instale a extensão. Agora você pode pesquisar suas plataformas
                de streaming favoritas, incluindo Netflix party is now a
                teleparty, Disney Plus e muito mais, e selecione o programa que
                deseja assistir. Você pode criar um link de URL para convidar
                seus amigos e familiares para transmitir o filme. Clique no
                vídeo ou programa que deseja assistir. Você também pode usar
                seus excelentes recursos para ter a melhor experiência,
                incluindo bate-papo, chamadas de áudio e vídeo. Então,
                prepare-se para ter experiências incríveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
