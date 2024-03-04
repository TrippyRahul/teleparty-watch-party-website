import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context": "https://schema.org","@type": "WebSite",name: "Teleparty",url: "https://www.teleparty.pro/",}`,
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
