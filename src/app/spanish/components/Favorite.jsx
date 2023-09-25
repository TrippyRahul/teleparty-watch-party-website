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
              <h2>Crea tu propia sala de observación</h2>{" "}
            </div>
            <div className={styles.desc}>
              <p>
                En esta extensión, también puedes crear tu propia sala de
                visualización donde puedes compartir reacciones en tiempo real
                mientras miras tu película favorita. Pero para tener esta
                experiencia necesitas descargar e instalar el netflixparty en su
                navegador y luego de eso, se sincronizará automáticamente. Por
                el cual tú y tus amigos podéis transmitir al mismo tiempo. Es
                solo que ambos deben iniciar sesión a la hora exacta. Tiene la
                mejor calidad HD para que tengas la sensación de estar viendo
                una película en un cine. También puedes organizar una fiesta en
                la que puedas invitar a tantos amigos como sea posible.
              </p>
            </div>
            <div className={styles.headings}>
              <h2>netflix party como usar</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Es un proceso muy fácil y sencillo. Primero, vaya a su
                navegador, busque la extensión telefiesta y luego descargue e
                instale la extensión. Ahora puedes buscar tus plataformas de
                transmisión favoritas, incluidas Netflix, Disney Plus y muchas
                más, y seleccionar el programa que deseas ver. Puede crear un
                enlace URL para invitar a sus amigos y familiares a transmitir
                la película. Haz clic en el video o el programa que deseas ver.
                También puede utilizar sus excelentes funciones para tener la
                mejor experiencia, incluido chat, audio y videollamadas. Así que
                prepárate para vivir la experiencia del cine en tu pequeña y
                acogedora habitación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
