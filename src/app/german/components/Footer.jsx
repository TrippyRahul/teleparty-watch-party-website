import React from "react";
import styles from "@/app/styles/footer.module.scss";
import Button from "@/app/components/Button";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles["image-container"]}>
            <Image
              src="/teleparty.svg"
              alt="ott-party"
              fill={true}
              className={styles["image"]}
            />
          </div>
          <h2>Teleparty watch party</h2>
        </div>

        <Button />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <ul className={styles.lang}>
            <li>
              <Link href="/french">French</Link>
            </li>
            <li>
              <Link href="/german">German</Link>
            </li>
            <li>
              <Link href="/portuguese">Portuguese</Link>
            </li>
            <li>
              <Link href="/spanish">Spanish</Link>
            </li>
            <li>
              <Link href="/turkish">Turkish</Link>
            </li>
          </ul>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Beliebte Suchanfragen:</span> Netflix teleparty and
              teleparty, Gemeinsam Netflix schauen, watch netflix together
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
