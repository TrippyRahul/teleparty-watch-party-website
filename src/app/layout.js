import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title:
    "Teleparty Extension | Explore Netflix, HBO Max, Amazon Prime Video, and more together ",
  description:
    "Teleparty Extension is the best way to binge your favorite movies and series on one platform",
  openGraph: {
    title:
      "Teleparty Extension | Watch HBO Max, Youtube, Netflix, Amazon Prime Video, and many more with your friends",
    description:
      "Teleparty Extension is the best way to connect with your loved ones who live apart. Here you can stream your most awaited movies and discuss them with your friends at the same time ",
    url: "https://www.teleparty.pro/",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.teleparty.pro/",
  },
  keywords:
    "Teleparty, Teleparty Extension, Teleparty Extension Chrome, Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix party,Teleparty Chrome Extension",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/teleparty.svg" />
        <meta
          name="google-site-verification"
          content="ynENXlWtPezmLw33y-47cICDIlytiz2-Gu8xNbKv0mQ"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RE7D09237N" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RE7D09237N');
          `,
          }}
        />
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              @context: https://schema.org/,
              @type: WebSite,
              name: Teleparty,
              url: https://www.teleparty.pro/,
              
         `,
          }}
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
      </body>
    </html>
  );
}
