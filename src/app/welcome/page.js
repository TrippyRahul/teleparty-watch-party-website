import React from "react";
import styles from "../styles/welcome.module.scss";
import Image from "next/image";

const stream = [
  {
    name: "Netflix",
  },
  { name: "youtube" },
  { name: "amazon" },
  {
    name: "Netflix",
  },
  { name: "youtube" },
  { name: "amazon" },
  {
    name: "Netflix",
  },
  { name: "youtube" },
  { name: "amazon" },
];

const page = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <h2>Get started in just few steps</h2>
      </div>
      <div className={styles.info}>
        <div>
          <h2>Pin the extension</h2>
          <Image
            src="/1(1).png"
            alt="main"
            fill={true}
            className={styles.image}
          />
          <p>
            Many families worldwide have their own ritual and tradition of movie
            nights. But when years pass, some family members settle in different
            states or countries. in such scenarios, uploading the movie night
            tradition gets a little tricky. If you belong to one such families
            and wishes to connect with your loved ones then
          </p>
        </div>
        <div>
          <h2>choose your streaming services</h2>

          <p>
            Many families worldwide have their own ritual and tradition of movie
            nights
          </p>

          <div className={styles.Allstream}>
            {" "}
            {stream.map((stream,index) => {
              return (
                <div className={styles.stream} key={index}>
                  <h3>{stream.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
