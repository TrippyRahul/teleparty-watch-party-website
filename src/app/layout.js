import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Watch together with teleparty extension  ",
  description:
    "Unite with friends and family on virtual movie night with teleparty extension and create a special memory. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link
          rel="canonical"
          href="https://www.telepartywatchparty.com/"
        />

        <meta
          property="og:url"
          content="https://www.telepartywatchparty.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disney plus watch party " />
        <meta
          property="og:description"
          content="Unite with friends and family on virtual movie night with teleparty extension and create a special memory. "
        />
        <meta
          property="og:image"
          content="https://www.telepartywatchparty.com/main-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="telepartywatchparty.com"
        />
        <meta
          property="twitter:url"
          content="https://www.telepartywatchparty.com/"
        />
        <meta name="twitter:title" content="Disney plus watch party " />
        <meta
          name="twitter:description"
          content="Unite with friends and family on virtual movie night with teleparty extension and create a special memory. "
        />
        <meta
          name="twitter:image"
          content="https://www.telepartywatchparty.com/main-logo.svg"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
