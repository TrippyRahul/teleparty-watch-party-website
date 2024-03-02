import React from "react";
import styles from "../styles/footer.module.scss";
import Button from "@/app/components/Button";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import FrequentlyAsked from "./FrequentlyAsked";

const Footer = ({ data }) => {
  return (
    <>
      {data && (
        <FrequentlyAsked questions={data.questions} title={data.faqTitle} />
      )}

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
            <h2>Watch Teleparty</h2>
            <p>
              Discover an exciting approach to enjoying movies and series with
              watch party extension
            </p>
          </div>
          <div className={styles.giveTeleparty}>
            <p>Get it, its free</p>
            <h2>I&apos;m ready Give me Telaparty</h2>
            <div className={styles.giveTelepartyBtn}>
              <Button />
              <Link href="/blogs" className={styles.btn}>
                Blog
              </Link>
              <Link href="/privacy" className={styles.btn}>
                Privacy
              </Link>
            </div>
            <div className={styles.giveTelepartyBtn}>
              <Link href="/french" className={styles.btn}>
                French
              </Link>
              <Link href="/turkish" className={styles.btn}>
                Trukish
              </Link>
              <Link href="/spanish" className={styles.btn}>
                Spanish
              </Link>
              <Link href="/portuguese" className={styles.btn}>
                Portuguese
              </Link>
              <Link href="/german" className={styles.btn}>
                German
              </Link>
            </div>
          </div>

          <hr className={styles.line} style={{ color: "gray" }} />

          <div className={styles.content}>
            <div className={styles["popular-searches"]}>
              <p>
                <span>
                  {data?.popularSearches?.title || "Popular searches"}:
                </span>{" "}
                {data?.popularSearches?.desc ||
                  "Teleparty,Teleparty Extension,Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, How to Netflix Party, How to use Netflix Party, How to do Netflix Party, How to do a Netflix Party, How to Watch Netflix Together, Hulu Watch Party, Hulu Party, Watch Party Hulu, How to use Hulu Watch Party, HBO Max Watch Party, Watch Party HBO Max, HBO Watch Party, HBO Go Watch Party, HBO Party, HBO Max Party, Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch, Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Prime Watch Party, Amazon Prime Video Party, Paramount Plus Watch Party, Paramount Party, Peacock TV Party, Peacock Watch Party, Peacock Party, "}
              </p>
            </div>
            <div className={styles["popular-searches"]}>
              <p>
                <span>{data?.disclaimer?.title || "Disclaimer"} :</span>
                {data?.disclaimer?.desc ||
                  "Teleparty, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV are the brands of their respective owners. This website & extension hold no association or membership with any of the mentioned brands or third-party companies. "}
              </p>
            </div>
            <ul>
              <li className="inline-block pl-4">
                <a href="https://www.facebook.com/people/Telepartypro/61556744579232/">
                  <BsFacebook className={styles.icon} />
                </a>
              </li>
              <li className="inline-block pl-6">
                <a href="https://twitter.com/TelepartyPro">
                  <AiFillTwitterCircle className={styles.icon} />
                </a>
              </li>

              <li className="inline-block pl-6">
                <a href="https://www.instagram.com/teleparty.pro?igsh=ank4dm9jeXRsbXBh">
                  <AiFillInstagram className={styles.icon} />
                </a>
              </li>
            </ul>

            <div className={styles.copyright}>
              <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
