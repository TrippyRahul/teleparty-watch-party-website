"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import { usePathname, useRouter } from "next/navigation";
useRouter;

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setSelectedLanguage(pathname);
  }, [pathname]);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    console.log("Selected Language:", language);
    if (language === "english") {
      router.push("/");
    } else {
      router.push(language);
    }
  };
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => handleChangeLanguage(e.target.value)}
      className={styles.lang}
    >
      <option value="english">English</option>
      <option value="french">French</option>
      <option value="turkish">Turkish</option>
      <option value="spanish">Spanish</option>
      <option value="portuguese">Portuguese</option>
      <option value="german">German</option>
    </select>
  );
};

export default Language;
