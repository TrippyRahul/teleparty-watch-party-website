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
        <link rel="icon" type="image/x-icon" href="/teleparty.svg" />
        <link rel="canonical" href="https://www.teleparty.pro/" />
        <meta
          name="google-site-verification"
          content="ynENXlWtPezmLw33y-47cICDIlytiz2-Gu8xNbKv0mQ"
        />

        <meta property="og:url" content="https://www.teleparty.pro/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Watch together with teleparty extension "
        />
        <meta
          property="og:description"
          content="Unite with friends and family on virtual movie night with teleparty extension and create a special memory. "
        />
        <meta
          property="og:image"
          content="https://www.teleparty.pro/main-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="teleparty.pro" />
        <meta property="twitter:url" content="https://www.teleparty.pro/" />
        <meta
          name="twitter:title"
          content=" Watch together with teleparty extension "
        />
        <meta
          name="twitter:description"
          content="Unite with friends and family on virtual movie night with teleparty extension and create a special memory. "
        />
        <meta
          name="twitter:image"
          content="https://www.teleparty.pro/main-logo.svg"
        />
      </head>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}
