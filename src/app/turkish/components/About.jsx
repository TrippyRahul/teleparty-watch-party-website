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
              <h2>Hakkımızda</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Tüm favori filmlerinizi aynı anda birlikte izleyebileceğiniz ve
                uzantıyı indirdiğinizde otomatik olarak senkronize edileceği
                muhteşem bir tarayıcı uzantısıdır. Sohbet, sesli ve görüntülü
                görüşme gibi harika özellikleri sayesinde bir programı izlerken
                düşüncelerinizi paylaşabilirsiniz. Ayrıca bir izleme odası
                düzenleyerek eğlenceli ve değerli anılar yaratabilirsiniz. Bu
                uzantıda, çeşitli platformlardan en son programların tümünü
                yayınlayabilirsiniz. Hazır ol netflix birlikte izleme
                Arkadaşlarınızla birlikte eğlenin ve bu uzantıyla hafızanızı
                kaydedin.
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
