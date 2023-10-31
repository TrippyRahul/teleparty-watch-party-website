import Schema from "./Schema";

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Watch together with teleparty extension  ",
  description:
    "Unite with friends and family on virtual movie night with teleparty extension and create a special memory. ",
  openGraph: {
    title: "Watch together with teleparty extension  ",
    description:
      "Unite with friends and family on virtual movie night with teleparty extension and create a special memory. ",
    url: "https://www.teleparty.pro/",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.teleparty.pro/",
  },
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
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RE7D09237N');
          `,
          }}
        />
      </head>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}
