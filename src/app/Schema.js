import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Teleparty",
              url: "https://www.teleparty.pro/",
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
