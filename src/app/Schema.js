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
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can you watch Party on netflix?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can view the party on Netflix. It’s just you need to install the Netflix Chrome extension and log in with your valid account. You can also invite friends on netflix.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch a movie with friends online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To see a movie with friends online, install the extension and stream your favorite series. It has amazing features like you can have chat, audio, and video calls while streaming.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to use teleparty extension?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is a very simple and easy process. Firstly install the extension from your web browser and add it to Chrome and then explore the hub of movies from various streaming platforms. ",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch HBO Max with family and friends?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Firstly, you need to download the extension and then hbomax login and select the movie and then group watch hbo max. ",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you group watch in this extension",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can invite your friends to view together. As there are many streaming platforms. It’s just you need to have a valid account. So, don’t be late and get ready to youtube watch together with your loved ones. ",
                  },
                },
              ],
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
