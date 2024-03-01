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
  title: "Entdecken Sie unbegrenzte Shows auf teleparty Netflix",
  description:
    " Kommen Sie mit Familie und Freunden zusammen und planen Sie einen virtuellen Filmtermin mit einer Netflix Teleparty und schaffen Sie Ihre besondere Erinnerung mit einigen unglaublichen Funktionen wie Chat, Audio- und Videoanrufen.",
  openGraph: {
    title: "Entdecken Sie unbegrenzte Shows auf teleparty Netflix",
    description:
      " Kommen Sie mit Familie und Freunden zusammen und planen Sie einen virtuellen Filmtermin mit einer Netflix Teleparty und schaffen Sie Ihre besondere Erinnerung mit einigen unglaublichen Funktionen wie Chat, Audio- und Videoanrufen.",
    url: "https://www.teleparty.pro/german",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  htmlAttributes: {
    lang: "de",
  },
  metadataBase: new URL("https://www.teleparty.pro/german"),
  alternates: {
    canonical: "/",
    turkish: [
      { href: "/", hreflang: "de-de" },
      { href: "/", hreflang: "de-lu" },
      { href: "/", hreflang: "de-li" },
      { href: "/", hreflang: "de-at" },
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
