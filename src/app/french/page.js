import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import Work from "./components/Work";
import Accordian from "./components/Accordian";
import About from "./components/About";
import Comments from "./components/Comments";

export const metadata = {
  title: " Explorez des émissions illimitées sur Netflix teleparty ",
  description:
    "Réunissez-vous en famille et entre amis et planifiez une date de cinéma virtuelle avec un Netflix teleparty et créez votre souvenir spécial avec des fonctionnalités incroyables, notamment le chat, les appels audio et vidéo.",
  openGraph: {
    title: " Explorez des émissions illimitées sur Netflix teleparty ",
    description:
      "Réunissez-vous en famille et entre amis et planifiez une date de cinéma virtuelle avec un Netflix teleparty et créez votre souvenir spécial avec des fonctionnalités incroyables, notamment le chat, les appels audio et vidéo.",
    url: "https://www.teleparty.pro/french",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.teleparty.pro/french",
  },
};

const page = () => {
  return (
    <html lang="fr">
      <head>
        <link
          rel="alternate"
          href="https://www.teleparty.pro/french"
          hreflang="fr-fr"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/french"
          hreflang="fr-be"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/french"
          hreflang="fr-ca"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/french"
          hreflang="fr-ch"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/french"
          hreflang="fr-mc"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/french"
          hreflang="fr-lu"
        />
      </head>
      <body>
        <Header />
        <Benefits />
        <Favorite />
        <Comments />
        <About />
        <Accordian />
        <Footer />
      </body>
    </html>
  );
};

export default page;
