"use client";
import styles from "../styles/header.module.scss";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [logoRedirectUrl, setlogoRedirectUrl] = useState("");

  useEffect(() => {
    const currentLanguage = pathname.substring(1);
    console.log("CURRENT LAG : ", currentLanguage);
    setSelectedLanguage(currentLanguage);
  }, [pathname]);

  useEffect(() => {
    switch (selectedLanguage) {
      case "french":
        setlogoRedirectUrl("/french");
        break;

      case "german":
        setlogoRedirectUrl("/german");
        break;

      case "turkish":
        setlogoRedirectUrl("/turkish");
        break;

      case "spanish":
        setlogoRedirectUrl("/spanish");
        break;

      case "portuguese":
        setlogoRedirectUrl("/portuguese");
        break;

      default:
        setlogoRedirectUrl("/");
        break;
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (language) => {
    if (language === "english") {
      router.push("/");
    } else {
      router.push(`/${language}`);
    }
    setSelectedLanguage(language);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href={`${logoRedirectUrl}`}>
              <div className={styles["image-container"]}>
                <Image
                  src="/teleparty.svg"
                  alt="ott-party"
                  fill={true}
                  className={styles["image"]}
                />
              </div>
            </Link>
          </li>
        </ul>

        <ul className={styles.actions}>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className={styles.lang}
          >
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="turkish">Turkish</option>
            <option value="spanish">Spanish</option>
            <option value="portuguese">Portuguese</option>
            <option value="german">German</option>
          </select>
          <div href="#" className={styles.hideBtn}>
            <Button />
          </div>
        </ul>
      </nav>
      <div className={styles.navInfo}>
        <p>Use Teleparty To Start Your Party With Your Friends And Family</p>
      </div>
    </>
  );
};

export default Navbar;
