import React from "react";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
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
  htmlAttributes: {
    lang: "fr",
  },
  metadataBase: new URL("https://www.teleparty.pro/french"),
  alternates: {
    canonical: "/",
    french: [
      { href: "/", hreflang: "fr-fr" },
      { href: "/", hreflang: "fr-be" },
      { href: "/", hreflang: "fr-ca" },
      { href: "/", hreflang: "fr-ch" },
      { href: "/", hreflang: "fr-mc" },
      { href: "/", hreflang: "fr-lu" },
    ],
  },
};

const page = () => {
  return (
    <>
      <Benefits />
      <Favorite />
      <Comments />
      <About />
      <Accordian />
      <Footer />
    </>
  );
};

export default page;
