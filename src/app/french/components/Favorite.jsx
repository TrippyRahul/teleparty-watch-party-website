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
              <h2>Regarder Netflix simultanément</h2>{" "}
            </div>
            <div className={styles.desc}>
              <p>
                Dans cette extension, vous pouvez également créer votre propre
                salle de visionnage où vous pourrez partager des réactions en
                temps réel tout en regardant votre film préféré. Mais pour vivre
                cette expérience, vous devez télécharger l&apos;extension sur votre
                navigateur et après cela, elle se synchronisera automatiquement.
                Grâce auquel vous et vos amis pouvez diffuser en même temps.
                C&apos;est juste que vous devez tous les deux vous connecter à
                l&apos;heure exacte. Il offre la meilleure qualité HD pour vous
                donner l’impression de regarder un film au cinéma. Vous pouvez
                également organiser une fête où vous pourrez inviter autant
                d’amis que possible.
              </p>
            </div>
            <div className={styles.headings}>
              <h2>télécharger netflix party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                C&apos;est un processus très simple et facile. Tout d&apos;abord, allez
                dans votre navigateur pour rechercher l&apos;extension télépartie,
                puis téléchargez et installez l&apos;extension. Désormais, vous
                pouvez rechercher vos plateformes de streaming préférées,
                notamment Netflix, Disney Plus et bien d&apos;autres, et sélectionner
                l&apos;émission que vous souhaitez regarder. Vous pouvez créer un
                lien URL pour inviter vos amis et votre famille à diffuser le
                film. Cliquez sur la vidéo ou l&apos;émission que vous souhaitez
                voir. Vous pouvez également utiliser ses fonctionnalités
                exceptionnelles pour bénéficier de la meilleure expérience,
                notamment le chat, les appels audio et vidéo. Alors
                préparez-vous à vivre des expériences incroyables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
