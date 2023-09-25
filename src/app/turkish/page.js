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
  title: " Sınırsız şovları keşfedin Netflix teleparty",
  description:
    "Aileniz ve arkadaşlarınızla bir araya gelin ve sanal bir film tarihi planlayın netflix teleparty ve sohbet, sesli ve görüntülü aramalar gibi bazı inanılmaz özelliklerle özel hafızanızı yaratın.",
  openGraph: {
    title: "  Sınırsız şovları keşfedin Netflix teleparty",
    description:
      "Aileniz ve arkadaşlarınızla bir araya gelin ve sanal bir film tarihi planlayın netflix teleparty ve sohbet, sesli ve görüntülü aramalar gibi bazı inanılmaz özelliklerle özel hafızanızı yaratın.",
    url: "https://www.teleparty.pro/turkish",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.teleparty.pro/turkish",
  },
};

const page = () => {
  return (
    <html lang="tr">
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
