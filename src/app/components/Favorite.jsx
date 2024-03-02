import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = ({ data }) => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/3(1).png"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            {data.map((item, index) => (
              <>
                <div className={styles.headings}>
                  <h2>{item.title}</h2>
                </div>
                <div className={styles.desc}>
                  {item.desc.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
