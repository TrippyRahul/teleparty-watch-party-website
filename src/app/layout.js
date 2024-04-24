import Schema from "./Schema";
import Header from "./components/Header";

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Teleparty Extension | Explore Netflix, Hulu + more together  ",
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
  metadataBase: new URL("https://www.teleparty.pro/"),
  alternates: {
    canonical: "/",
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
          name="google-adsense-account"
          content="ca-pub-4939229192346726"
        ></meta>
        <meta
          name="google-site-verification"
          content="ynENXlWtPezmLw33y-47cICDIlytiz2-Gu8xNbKv0mQ"
        />
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RE7D09237N" />
        <Script
          strategy="beforeInteractive"
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
          strategy="beforeInteractive"
          id="taboola-script"
          dangerouslySetInnerHTML={{
            __html: `
                window._tfa = window._tfa || [];
                window._tfa.push({notify: 'event', name: 'page_view', id: 1667643});
                !function (t, f, a, x) {
                  if (!document.getElementById(x)) {
                    t.async = 1;
                    t.src = a;
                    t.id = x;
                    f.parentNode.insertBefore(t, f);
                  }
                }(document.createElement('script'),
                  document.getElementsByTagName('script')[0],
                  '//cdn.taboola.com/libtrc/unip/1667643/tfa.js',
                  'tb_tfa_script');
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
