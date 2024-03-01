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
  title: " Explore programas ilimitados online teleparty",
  description:
    "Reúna-se com a família e amigos e planeje um encontro virtual no cinema com um teleparty e crie sua memória especial com alguns recursos incríveis, incluindo bate-papo, chamadas de áudio e vídeo.",
  openGraph: {
    title: " Explore programas ilimitados online teleparty",
    description:
      "Reúna-se com a família e amigos e planeje um encontro virtual no cinema com um teleparty e crie sua memória especial com alguns recursos incríveis, incluindo bate-papo, chamadas de áudio e vídeo.",
    url: "https://www.teleparty.pro/portuguese",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  htmlAttributes: {
    lang: "pt",
  },
  metadataBase: new URL("https://www.teleparty.pro/portuguese"),
  alternates: {
    canonical: "/",
    turkish: [
      { href: "/", hreflang: "pt-pt" },
      { href: "/", hreflang: "pt-ao" },
      { href: "/", hreflang: "pt-br" },
      { href: "/", hreflang: "pt-mo" },
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
