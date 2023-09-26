import React from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/1(1).png"
                alt="main"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["right"]}>
            <div className={styles.headings}>
              <h1>
                Netflix teleparty videoları senkronize etmenizi ve izlemenizi
                sağlayan harika bir uzantıdır
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                Telepartideki en son programları izlemenin en iyi yoludur. Bu
                uzantıyı kullanarak oynatmayı senkronize edebilirsiniz ve
                sohbet, sesli ve görüntülü aramalar dahil en iyi özelliklerden
                bazılarına sahiptir. Burada Disney Plus, Amazon Prime, Hulu,
                Netflix, Paramount gibi tüm popüler yayın hizmetlerini ve en
                yeni şovlara, filmlere ve dizilere göz atabileceğiniz çok daha
                fazlasını bulacaksınız. Böylece sevdiklerinizle bağlantı kurun
                ve kendi izleme odanızı yaratın. watch2gether.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.platform}>
        <h5>Teleparty is available on</h5>
        <ul>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/netflix.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/youtube.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hotstar.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hbo.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/hulu.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
          <li>
            <div className={styles["image-container"]}>
              <Image
                src="/prime.svg"
                alt="platform"
                fill={true}
                className={styles.image}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
