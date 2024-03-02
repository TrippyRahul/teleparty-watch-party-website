import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Benefits = ({ data }) => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h1>{data.title}</h1>
            </div>
            <div className={styles.desc}>
              {data.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="/2(1).png"
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
