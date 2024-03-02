"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const currentLanguage = pathname.substring(1);
    console.log("CURRENT LAG : ", currentLanguage);
    setSelectedLanguage(currentLanguage);
  }, [pathname]);

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
    </>
  );
};

export default Language;
