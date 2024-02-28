import React from "react";
import styles from "../styles/privacy.module.scss";

const privacy = () => {
  return (
    <div className={styles.privacy}>
      <div className={styles.container}>
        <h2>Privacy Policy</h2>
        <p>
          The privacy policy of teleparty documents contains all types of
          details that are collected by ourselves. But in case you have any
          queries about our privacy policy you can freely contact us without any
          hesitation. For using our website, you need to agree with our privacy
          policy.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you register for an account on our website, we may ask for such
          information including your name, email address, phone number, company
          name, or permanent address. But if you are worried about leaking your
          personal information then worry not because we do not share our
          customer&apos;s information without their consent.
        </p>
        <h2>How we use your information</h2>
        <p>
          We use your information in various ways including to provide, operate,
          and maintain our website. We improve and personalize our website. We
          understand and analyze how you use our website. We communicate with
          you either directly or indirectly through our customer service to
          provide you with the latest updates and other information relating to
          our website
        </p>
      </div>
    </div>
  );
};

export default privacy;
