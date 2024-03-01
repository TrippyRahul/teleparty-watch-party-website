import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import Work from "./components/Work";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UseTeleparty from "./components/UseTeleparty";
import HowToUse from "./components/HowToUse";
import Features from "./components/Features";
import SharedLink from "./components/SharedLink";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <>
      <UseTeleparty />
      <Benefits />
      <HowToUse />
      <Favorite />
      <About />
      <SharedLink />
      <Features />
      <Footer />
    </>
  );
}
