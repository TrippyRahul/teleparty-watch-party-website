import React from "react";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
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
  htmlAttributes: {
    lang: "es",
  },
  metadataBase: new URL("https://www.teleparty.pro/spanish"),
  alternates: {
    canonical: "/",
    turkish: [
      { href: "/", hreflang: "es-es" },
      { href: "/", hreflang: "es-ar" },
      { href: "/", hreflang: "es-co" },
      { href: "/", hreflang: "es-pe" },
      { href: "/", hreflang: "es-mx" },
      { href: "/", hreflang: "es-cl" },
      { href: "/", hreflang: "es-uy" },
      { href: "/", hreflang: "es-cr" },
      { href: "/", hreflang: "es-bo" },
      { href: "/", hreflang: "es-cu" },
      { href: "/", hreflang: "es-ma" },
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
