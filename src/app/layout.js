import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

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
      </head>
      <body>
        <Schema />
        {children}
      </body>
    </html>
  );
}
