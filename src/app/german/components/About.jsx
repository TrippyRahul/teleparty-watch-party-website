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
              <h2>Über uns</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Es handelt sich um eine erstaunliche Browsererweiterung, mit der
                Sie alle Ihre Lieblingsfilme gleichzeitig ansehen können. Wenn
                Sie die Erweiterung herunterladen, wird sie automatisch
                synchronisiert. Mit seinen tollen Funktionen wie Chat, Audio-
                und Videoanrufen können Sie Ihre Gedanken teilen, während Sie
                eine Sendung ansehen. Sie können auch lustige und wertvolle
                Erinnerungen schaffen, indem Sie einen Beobachtungsraum
                einrichten. In dieser Erweiterung können Sie die neuesten
                Sendungen von verschiedenen Plattformen streamen.
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
