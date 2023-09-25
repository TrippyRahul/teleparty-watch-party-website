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
              <h2>Sobre nosotros</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Es una increíble extensión de navegador donde puedes ver todas
                tus películas favoritas juntas al mismo tiempo y, al descargar
                la extensión, se sincronizará automáticamente. Con sus
                excelentes funciones que incluyen chat, audio y videollamadas,
                puedes compartir tus pensamientos mientras miras un programa.
                También puedes crear recuerdos divertidos y valiosos organizando
                una sala de observación. En esta extensión, puede transmitir
                todos los programas más recientes desde varias plataformas.
                Entonces, guarda tu memoria y disfruta de tu cita virtual con
                esta extensión.
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
