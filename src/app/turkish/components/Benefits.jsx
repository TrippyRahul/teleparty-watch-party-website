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
              <h2>Yayın yapmanın nihai keyfini yaşayın Netflix party Chrome</h2>
            </div>
            <div className={styles.desc}>
              <p>
                En iyi deneyimi yaşamak için uzantıyı indirip yüklemeniz
                yeterlidir. Burada sonsuz dizi, dizi ve film bulacaksınız. Bu
                uzantıda, akış sırasında tepkilerinizi paylaşabilmeniz için
                sohbet, sesli ve görüntülü aramalar gibi harika özellikler
                bulunmaktadır. Ayrıca izleyebileceğiniz izleme odanızı da
                oluşturabilirsiniz. sync watch arkadaşlarınızla.
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
