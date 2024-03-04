import React from "react";
import UseTeleparty from "@/app/components/UseTeleparty";
import HowToUse from "@/app/components/HowToUse";
import SharedLink from "@/app/components/SharedLink";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

export const metadata = {
  title: "Teleparty Extension | Erkunden Netflix, Hulu + mehr zusammen",
  description:
    " Teleparty Extension ist der beste Weg, Ihre Lieblingsfilme und -serien auf einer Plattform zu genießen.",
  keywords:
    "Teleparty, Teleparty Extension, Teleparty Extension Chrome, Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix party,Teleparty Chrome Extension,  ",
  openGraph: {
    title:
      "Teleparty Extension | Watch HBO Max, Youtube, Netflix, Amazon Prime Video, und vieles mehr mit deinen Freunden.",
    description:
      " Teleparty Extension ist der beste Weg, mit Ihren Lieben in Kontakt zu treten, die getrennt leben. Hier können Sie Ihre am meisten erwarteten Filme streamen und gleichzeitig mit Ihren Freunden darüber diskutieren.      ",
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

const data = {
  useTeleparty: {
    title:
      "Entdecken Sie Teleparty und streamen Sie Ihre Lieblingsfilme mit Ihren Freunden und Ihrer Familie      ",
    desc: "<p>Laden Sie die herunter <a href='/german'> Teleparty </a> Chrome damit Sie Ihren Filmabend mit Ihren Liebsten planen können. Es gibt mehrere Streaming-Plattformen, darunter  Netflix, Hulu, Prime Video, HBP Max, Disney Plus, Peacock TV, and Paramount Plus, unter anderem Dienstleistungen. Sie können auch eine Party zum Ansehen Ihres Lieblingsfilms veranstalten und beim Streamen lustige Emojis senden. Es wird sich anfühlen, als würden sie einfach nur bei dir sitzen. Es ist eine sehr einfach zu bedienende und benutzerfreundliche Website.   </p> ",
  },
  howToUse: {
    title: "So verwenden Sie das Teleparty extension ",
    desc: [
      " Mit der Hilfe von Teleparty, Sie können Filme mit Ihren Lieben streamen. Sie können auch einen Live-Chat führen und die Wiedergabe von Inhalten mit Ihren bevorzugten Streaming-Plattformen synchronisieren. Laden Sie also die herunter Teleparty Chrome extension und genießen Sie ein virtuelles Kino-Date mit Ihrem besonderen Freund, der getrennt lebt.      ",
      "Teleparty Extension ist das beste Tool für diejenigen, die mehrere Formen der Unterhaltung auf einer Plattform suchen. Es ist die einfachste Art zu verwenden und verfügt über erstaunliche Funktionen, mit denen Sie mit Ihren Freunden und Ihrer Familie in Kontakt treten können. Dieses Web extension teleparty läuft sowohl auf Chrome als auch auf Firefox reibungslos. Sie können auch Ihren Beobachtungsraum erstellen und eine unbegrenzte Anzahl von Gästen einladen. Befolgen Sie die nachstehenden Anweisungen, um es erfolgreich zu verwenden.       ",
    ],
    questions: [
      {
        id: 1,
        ques: "Installiere das Teleparty Extension         ",
        ans: "Zunächst müssen Sie sicherstellen, dass Sie über Browser wie z Microsoft Edge and Google Chrome. Sie können die auch herunterladen teleparty Extension mit dem Website-Link. Streamen Sie die neuesten Filme und Serien mit dem Chrome Teleparty extension. Verbringen Sie mit ihnen einen Filmabend bequem von zu Hause aus.        ",
      },
      {
        id: 2,
        ques: "Stecken Sie die Erweiterung fest  ",
        ans: "Als nächstes müssen Sie es nach dem Herunterladen und Installieren einfach an die Symbolleiste Ihres Webbrowsers anheften. Klicken Sie mit der rechten Maustaste auf das TP-Symbol und drücken Sie dann auf das Pin-Symbol, um die TP-Schaltfläche an die Symbolleiste anzuheften. Sie können auch die finden extension durch Berühren des Puzzle-Symbols. Sie können auch die verwenden Chrome teleparty extension zum Download.  ",
      },
      {
        id: 3,
        ques: "Öffnen Sie Ihr Streaming-Konto und melden Sie sich an        ",
        ans: "Sie können Streaming-Konten durchgehen, einschließlich  Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV.  Sie sollten über ein gültiges Konto mit einem Abonnement verfügen und daran denken, dass beitretende Mitglieder über ein aktives Konto verfügen müssen. Das Beste daran ist, dass jeder Gastgeber sein und eine Watch-Party veranstalten kann. Also, worauf wartest Du? Laden Sie die Teleparty-Erweiterung von herunter Chrome web store Jetzt.",
      },
      {
        id: 4,
        ques: "Suchen und beobachten ",
        ans: "Finden Sie jetzt Ihren am meisten erwarteten Film oder Ihre Serie auf Ihrer bevorzugten Plattform, um ihn anzusehen und mit dem Streaming zu beginnen. Sie können das Video auch anhalten und eine Watch-Party veranstalten. ",
      },
      {
        id: 5,
        ques: "Organisieren Sie eine Watch-Party        ",
        ans: "Um ein Watch-Party-Fenster zu beginnen, müssen Sie in Ihrem Browser in der Symbolleiste auf das TP-Symbol klicken. Daraufhin wird ein Popup-Fenster mit der Bezeichnung „Create A Watch Party“ angezeigt. Darüber hinaus gibt es auch einen „Start A Party“-Button, über den Sie Ihren Teleparty-Einladungslink erstellen können. Um Ihre Lieben zur Uhrenparty einzuladen, senden Sie ihnen die URL der Einladung. An Google Chrome Teleparty Sie können sie leicht beobachten. Also beeilen Sie sich und genießen Sie Ihren Film oder Ihre Serie. ",
      },
      {
        id: 6,
        ques: "Möglichkeiten, Teleparty-Mitglied zu werden ",
        ans: "Jetzt können Sie auf die Teleparty-Einladung tippen, nachdem Sie sich in Ihrem Streaming-Konto angemeldet haben. Sie müssen lediglich die entsprechende Nebenstelle konfiguriert haben, bevor Sie der Watch-Party beitreten können. Klicken Sie auf den Watch-Party-Link und erstellen Sie Ihre eigene Watch-Party. ",
      },
    ],
  },
  features: {
    title: "Wunderbare Eigenschaften von Teleparty    ",
    questions: [
      {
        id: 1,
        ques: "Einer für alle        ",
        ans: "Mit Teleparty Sie haben Zugriff auf mehrere Top-Streaming-Dienste, bei denen Sie eine endlose Auswahl an Unterhaltung genießen können. Netflix, Hulu, Disney+, Hotstar, Prime Video, HBO Max, Paramount Plus, and Peacock TV sind die besten Möglichkeiten, Partys anzusehen. Für Netflix party Chrome download, Sie müssen über eine stabile Internetverbindung und ein gültiges Konto verfügen. ",
      },
      {
        id: 2,
        ques: "Party-Kontrolluhr        ",
        ans: "Von dieser Erweiterung aus können Sie auch a hosten virtual watch party. Die Schaltfläche „Nur ich habe die Kontrolle“ steht dem Gastgeber der Party zur Verfügung. Seien Sie also der Chef Ihrer Uhrenparty. Sie können alle Steuerelemente verwenden, um das Video einfach abzuspielen, anzuhalten, vorzuspulen, zurückzuspulen oder fortzusetzen Netflix Teleparty Chrome.  ",
      },
      {
        id: 3,
        ques: "Gruppengespräch        ",
        ans: "Mit dieser unglaublichen Funktion können Sie durch das Streamen von Filmen und Serien mehr Kontakte zu Ihren Freunden und Ihrer Familie knüpfen. Teilen Sie Ihre Gedanken und Gefühle mit Ihren Lieben, während Sie Ihre Lieblingsinhalte streamen. Watch party Teilnehmer können die Gruppenchat-Funktion nutzen, um an Gruppendiskussionen teilzunehmen. Dort können Sie auch Emojis verwenden, mit denen Sie Ihre Meinung zu den aufregendsten Szenen ausdrücken können. ",
      },
      {
        id: 4,
        ques: "Weltweite Zugänglichkeit        ",
        ans: "Sie können darauf zugreifen Teleparty Extension. Es kann problemlos von überall auf der Welt heruntergeladen werden. Mit diesem extension, Schaffen Sie Ihre Erinnerungen mit Ihren Lieben. Um das zu nutzen Teleparty service Nutzen Sie ein zuverlässiges VPN (Virtual Protected Network). Lernen teleparty Chrome extension download in wenigen einfachen Schritten, indem Sie unsere Website besuchen. ",
      },
      {
        id: 5,
        ques: "Full-HD-Content-Streaming        ",
        ans: "Teleparty ist leistungsorientiert extension mit high-resolution streaming and synchronization. Es verbessert auch Ihr Streaming-Erlebnis zweifelsohne. Sie können hervorragende Filme und Fernsehserien auch online in High Definition ansehen. Streamen Sie den Inhalt real-time sync und teilen Sie es mit Ihren Lieben. ",
      },
      {
        id: 6,
        ques: "Anpassung von Profilen        ",
        ans: "Indem Sie Ihr Chat-Profil mit der Erweiterung anpassen, können Sie Ihrem Chat-Profil noch mehr Spaß hinzufügen virtual watch party. Hier haben Sie die Möglichkeit, einen beliebigen Avatar aus der Sammlung auszuwählen, den Sie als Profilbild verwenden möchten. Sie können humorvolle und niedliche Spitznamen auf Ihrem Computer verwenden teleparty extension Chrome Profil.         ",
      },
      {
        id: 7,
        ques: "Kompaktes Design        ",
        ans: "Hier geht es um Unterhaltung Teleparty extension wo Sie alle erstaunlichen Funktionen und Freude kostenlos nutzen können.        ",
      },
    ],
  },
  sharedLink: {
    title: "Wie veranstalte ich eine Teleparty?    ",
    desc: [
      "Denken Sie daran, dass eine gemeinsame Mitgliedschaft Teil eines Premium-Preisplans sein muss, der vielen Benutzern den Zugriff ermöglicht streaming service for a party auf einmal. Darüber hinaus ist es ratsam, über eine persönliche Mitgliedschaft zu verfügen, um unbegrenzt Inhalte ansehen zu können teleparty for Chrome. ",
    ],
  },

  footer: {
    faqTitle: "Häufig gestellte Fragen    ",

    questions: [
      {
        id: 1,
        ques: "Was ist der Zweck von Teleparty?        ",
        ans: "Um einen Film oder eine Show gleichzeitig mit einer Gruppe von Freunden und Familienmitgliedern anzusehen, können Sie ihn mit starten, stoppen und anhalten free Teleparty extension for Google Chrome.        ",
      },
      {
        id: 2,
        ques: "Wie groß kann ich eine Watch-Party-Einladung verschicken?        ",
        ans: "Teleparty Ermöglicht die gleichzeitige Anwesenheit einer unbegrenzten Anzahl von Benutzern in einem Raum, jedoch nur für Text-Chat. Sie können nicht nur weitere auffällige Avatare hinzufügen und einen Namen für sich selbst auswählen, sondern auch Kommentare zu allem hinzufügen, was Sie gerade ansehen teleparty Google Chrome.         ",
      },
      {
        id: 3,
        ques: "Wie kann ich mich anmelden? Teleparty?        ",
        ans: "Erstens müssen Sie download and install the Teleparty extension, dann können Sie darauf zugreifen streaming service Hier können Sie die Watch-Party veranstalten, indem Sie sich anmelden. Um schließlich einfach teilzunehmen, tippen Sie auf den Link, den der Gastgeber Ihnen für die Einladung bereitgestellt hat, und schauen Sie sich die neuesten Filme und Shows in High-Definition an teleparty Google Chrome extension.  ",
      },
    ],

    popularSearches: {
      title: "beliebte Suchanfragen      ",
      desc: "Teleparty,Teleparty Extension,Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, How to Netflix Party, How to use Netflix Party, How to do Netflix Party, How to do a Netflix Party, How to Watch Netflix Together, Hulu Watch Party, Hulu Party, Watch Party Hulu, How to use Hulu Watch Party, HBO Max Watch Party, Watch Party HBO Max, HBO Watch Party, HBO Go Watch Party, HBO Party, HBO Max Party, Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch, Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Prime Watch Party, Amazon Prime Video Party, Paramount Plus Watch Party, Paramount Party, Peacock TV Party, Peacock Watch Party, Peacock Party,",
    },

    disclaimer: {
      title: "Haftungsausschluss      ",
      desc: "Teleparty, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV sind die Marken ihrer jeweiligen Eigentümer. Diese Website und Erweiterung stehen in keiner Verbindung oder Mitgliedschaft zu einer der genannten Marken oder Drittunternehmen.",
    },
  },
};

const page = () => {
  return (
    <>
      <UseTeleparty data={data.useTeleparty} />
      <HowToUse data={data.howToUse} />
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.headings}>
                <h2>Über uns</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Es handelt sich um eine erstaunliche Browsererweiterung, mit
                  der Sie alle Ihre Lieblingsfilme gleichzeitig ansehen können.
                  Wenn Sie die Erweiterung herunterladen, wird sie automatisch
                  synchronisiert. Mit seinen tollen Funktionen wie Chat, Audio-
                  und Videoanrufen können Sie Ihre Gedanken teilen, während Sie
                  eine Sendung ansehen. Sie können auch lustige und wertvolle
                  Erinnerungen schaffen, indem Sie einen Beobachtungsraum
                  einrichten. In dieser Erweiterung können Sie die neuesten
                  Sendungen von verschiedenen Plattformen streamen.
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles["image-container"]}>
                <Image
                  src="/4(1).png"
                  alt="about"
                  fill={true}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SharedLink data={data.sharedLink} />
      <Features data={data.features} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
