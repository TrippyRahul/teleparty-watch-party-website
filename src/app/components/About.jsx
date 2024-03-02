import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = ({ data }) => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>{data.title}</h2>
            </div>
            <div className={styles.desc}>
              {data.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/4(1).png"
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
