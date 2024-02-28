import React from "react";
import styles from "../styles/button.module.scss";
import { AiFillChrome } from "react-icons/ai";

const Button = () => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/teleparty-pro/gfmbbcakoflhbbamcfcfgclgjibaodgc/related?hl=en"
      target="_blank"
    >
      <button className={styles.btn}>
        {" "}
        <AiFillChrome /> Add to Chrome it &apos;s free
      </button>
    </a>
  );
};

export default Button;
