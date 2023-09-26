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
  title: " Explora programas ilimitados en Teleparty extension",
  description:
    " Reúnase con familiares y amigos y planifique una cita virtual para ver una película con un teleparty extension y crea tu recuerdo especial con algunas funciones increíbles que incluyen chat, audio y videollamadas.",
  openGraph: {
    title: "  Explora programas ilimitados en Teleparty extension",
    description:
      " Reúnase con familiares y amigos y planifique una cita virtual para ver una película con un teleparty extension y crea tu recuerdo especial con algunas funciones increíbles que incluyen chat, audio y videollamadas.",
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
    <html lang="es">
      <head>
        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-es"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-ar"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-co"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-pe"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-mx"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-cl"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-uy"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-cr"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-bo"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-cu"
        />

        <link
          rel="alternate"
          href="https://www.teleparty.pro/spanish"
          hreflang="es-ma"
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
