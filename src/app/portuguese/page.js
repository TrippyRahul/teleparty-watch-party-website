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
  alternates: {
    canonical: "https://www.teleparty.pro/portuguese",
  },
};

const page = () => {
  return (
    <html lang="pt">
      <head>
        <link
          rel="alternate"
          href="https://www.teleparty.pro/portuguese"
          hreflang="pt-pt"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/portuguese"
          hreflang="pt-ao"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/portuguese"
          hreflang="pt-br"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/portuguese"
          hreflang="pt-mo"
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
