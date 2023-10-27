"use client";
import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  const handleButtonClick = () => {
    const redirectURL = "";
    window.open(redirectURL, "_blank");
  };

  return (
    <a
      href="https://chrome.google.com/webstore/detail/teleparty-pro/gfmbbcakoflhbbamcfcfgclgjibaodgc/related?hl=en"
      target="_blank"
    >
      <button className={styles.btn} onClick={handleButtonClick}>
        Add to Chrome
      </button>
    </a>
  );
};

export default Button;
