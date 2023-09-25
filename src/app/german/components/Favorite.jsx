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
              <h2>Netflix gleichzeitig schauen</h2>{" "}
            </div>
            <div className={styles.desc}>
              <p>
                In dieser Erweiterung können Sie auch Ihren eigenen
                Zuschauerraum erstellen, in dem Sie Echtzeitreaktionen teilen
                können, während Sie Ihren Lieblingsfilm ansehen. Um dieses
                Erlebnis nutzen zu können, müssen Sie jedoch die Erweiterung in
                Ihren Browser herunterladen. Anschließend wird sie automatisch
                synchronisiert. Damit können Sie und Ihre Freunde gleichzeitig
                streamen. Sie müssen sich nur beide genau zum richtigen
                Zeitpunkt anmelden. Es verfügt über die beste HD-Qualität,
                sodass Sie das Gefühl haben, einen Film im Kino anzusehen. Sie
                können auch eine Party veranstalten, zu der Sie möglichst viele
                Freunde einladen.
              </p>
            </div>
            <div className={styles.headings}>
              <h2>So schauen Sie zu netflix zusammen schauen</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Es ist ein sehr einfacher und unkomplizierter Vorgang. Suchen
                Sie zunächst in Ihrem Browser nach der Teleparty-Erweiterung,
                laden Sie dann die Erweiterung herunter und installieren Sie
                sie. Jetzt können Sie nach Ihren bevorzugten
                Streaming-Plattformen suchen, darunter Netflix, Disney Plus und
                viele mehr, und die Sendung auswählen, die Sie sehen möchten.
                Sie können einen URL-Link erstellen, um Ihre Freunde und Familie
                zum Streamen des Films einzuladen. Klicken Sie auf das Video
                oder die Sendung, die Sie ansehen möchten. Sie können auch die
                großartigen Funktionen nutzen, um das beste Erlebnis zu
                erzielen, einschließlich Chat, Audio- und Videoanrufe. Machen
                Sie sich bereit für unglaubliche Erlebnisse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
