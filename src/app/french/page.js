import React from "react";
import UseTeleparty from "@/app/components/UseTeleparty";
import HowToUse from "@/app/components/HowToUse";
import SharedLink from "@/app/components/SharedLink";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

export const metadata = {
  title: "Teleparty Extension | Explorer Netflix, Hulu + plus ensemble",
  description:
    "Teleparty Extension est le meilleur moyen de visionner vos films et séries préférés sur une seule plateforme.    ",
  keywords:
    "Teleparty, Teleparty Extension, Teleparty Extension Chrome, Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix party,Teleparty Chrome Extension,  ",
  openGraph: {
    title:
      "Teleparty Extension | Watch HBO Max, Youtube, Netflix, Amazon Prime Video, et bien d'autres avec vos amis. ",
    description:
      "Teleparty Extension est la meilleure façon de communiquer avec vos proches qui vivent séparés. Ici, vous pouvez diffuser vos films les plus attendus et en discuter avec vos amis en même temps.      ",
    url: "https://www.teleparty.pro/french",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  htmlAttributes: {
    lang: "fr",
  },
  metadataBase: new URL("https://www.teleparty.pro/french"),
  alternates: {
    canonical: "/",
    french: [
      { href: "/", hreflang: "fr-fr" },
      { href: "/", hreflang: "fr-be" },
      { href: "/", hreflang: "fr-ca" },
      { href: "/", hreflang: "fr-ch" },
      { href: "/", hreflang: "fr-mc" },
      { href: "/", hreflang: "fr-lu" },
    ],
  },
};

const data = {
  useTeleparty: {
    title:
      "Explorez Teleparty pour visionner vos films les plus attendus avec vos amis et votre famille",
    desc: "<p>En téléchargeant simplement le <a href='/french'>Teleparty</a> Chrome vous pouvez planifier votre soirée cinéma avec vos proches. Vous y trouverez plusieurs plateformes de streaming dont  Netflix, Hulu, Prime Video, HBP Max, Disney Plus, Peacock TV, and Paramount Plus, entre autres services. La meilleure partie, c'est que vous pouvez également organiser une soirée de visionnage où vous pouvez non seulement vous gaver de votre film préféré, mais également avoir une conversation et envoyer des emojis amusants. Vous aurez l'impression qu'ils sont simplement assis avec vous. Il s’agit d’un site Web très simple à utiliser et convivial. </p> ",
  },
  howToUse: {
    title: "Comment utiliser Teleparty    ",
    desc: [
      " Avec l'aide de Teleparty, vous pouvez regarder des films à distance avec vos proches. Il propose également un chat en direct et synchronise la lecture du contenu avec vos sites de streaming préférés. En téléchargeant le Teleparty Chrome extension, vous pouvez profiter d'un rendez-vous virtuel au cinéma avec votre ami spécial qui vit séparément.",
      "Teleparty L'extension est la meilleure option pour ceux qui recherchent plusieurs formes de divertissement sur une seule page. C'est le moyen le plus simple à utiliser et possède des fonctionnalités étonnantes qui vous permettent de vous connecter avec votre meilleur ami. Ce site Internet extension teleparty fonctionne correctement sur Chrome et Firefox. Ici, vous pouvez créer votre propre salle de surveillance où vous pouvez inviter un nombre illimité d'invités à vous rejoindre. Voici les instructions ci-dessous pour l’utiliser avec succès.  ",
    ],
    questions: [
      {
        id: 1,
        ques: "Installez l'extension Teleparty         ",
        ans: "Tout d’abord, vous devez vous assurer que vous disposez de navigateurs tels que Microsoft Edge and Google Chrome. Vous pouvez également télécharger le teleparty Extension en cliquant sur son lien. Regardez tous les derniers contenus avec le Chrome Teleparty extension avec votre famille et vos amis dans le confort de votre maison.",
      },
      {
        id: 2,
        ques: "Épingler l'extension         ",
        ans: "Ensuite, après le téléchargement et l'installation, épinglez-le simplement dans la barre d'outils de votre navigateur Web. Cliquez avec le bouton droit sur le symbole TP, puis appuyez sur l'icône d'épingle pour épingler le bouton TP à la barre d'outils. Vous pouvez également localiser le extension en touchant l'icône du puzzle. Vous pouvez également utiliser le Chrome teleparty extension pour le téléchargement.",
      },
      {
        id: 3,
        ques: "Ouvrez votre compte de streaming et connectez-vous        ",
        ans: "Vous pouvez passer par votre compte de streaming préféré tel que  Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV. Il vous suffit d’avoir un compte valide avec un abonnement et de vous rappeler que les membres qui adhèrent doivent avoir un compte actif. N’importe qui peut être l’hôte et créer une soirée de surveillance. Alors qu'est-ce que tu attends? Téléchargez l'extension Teleparty depuis le Chrome web store maintenant.",
      },
      {
        id: 4,
        ques: "Rechercher et regarder ",
        ans: "Trouvez maintenant le film ou la série le plus attendu que vous souhaitez regarder et commencez à diffuser. Si vous le souhaitez, vous pouvez mettre la vidéo en pause et organiser une soirée de visionnage.        ",
      },
      {
        id: 5,
        ques: "Organisez une soirée montre        ",
        ans: 'Pour démarrer un watch party window sur votre navigateur, cliquez sur le symbole TP dans la barre d\'outils. Cela affichera une fenêtre contextuelle intitulée"Create A Watch Party" apparaître. De plus, il y a aussi un"Start A Party" bouton où vous pouvez créer votre Teleparty invitation link. Pour inviter vos amis et votre famille au watch party, envoyez-leur l\'URL de l\'invitation. Sur Google Chrome Teleparty vous pouvez facilement les regarder. Alors dépêchez-vous et profitez de votre film ou série.',
      },
      {
        id: 6,
        ques: "Comment devenir membre de Teleparty        ",
        ans: "Enfin, vous pouvez maintenant appuyer sur le Teleparty invitation après vous être connecté à votre compte de streaming. Il vous suffit de vous assurer que l’extension appropriée est configurée avant de rejoindre la soirée de surveillance. En cliquant simplement sur le lien de la soirée de visionnage, vous pouvez créer la vôtre watch party.        ",
      },
    ],
  },
  features: {
    title: "Caractéristiques de Teleparty    ",
    questions: [
      {
        id: 1,
        ques: "Un pour tout le monde        ",
        ans: "Teleparty donne accès à plusieurs services de streaming de premier plan où vous pouvez profiter d'une sélection infinie de divertissements. Netflix, Hulu, Disney+, Hotstar, Prime Video, HBO Max, Paramount Plus, and Peacock TV sont toutes les meilleures façons de voir les fêtes. Pour Netflix party Chrome download, assurez-vous que vous disposez d’une connexion Internet stable et d’un compte valide.",
      },
      {
        id: 2,
        ques: "Surveillance du contrôle des fêtes        ",
        ans: "La meilleure partie de cette extension est que vous pouvez également héberger le virtual watch party. Le bouton « Seul j'ai le contrôle » est disponible pour l'hôte de la fête. Alors, soyez le patron de votre soirée montre. Vous pouvez désormais utiliser toutes les commandes pour lire, mettre en pause, avancer rapidement, rembobiner ou reprendre facilement la vidéo sur Netflix Teleparty Chrome.         ",
      },
      {
        id: 3,
        ques: "Discussion de groupe        ",
        ans: "Avec cette fonctionnalité, vous pouvez établir davantage de liens avec vos proches en diffusant votre contenu préféré. Ce sera encore plus intéressant lorsque vous pourrez partager vos pensées et vos sentiments avec d’autres personnes. Watch party les participants peuvent utiliser la fonction de discussion de groupe pour participer à des discussions de groupe. Là, vous pouvez également avoir des Emojis où vous pouvez exprimer ce que vous ressentez sur les scènes les plus excitantes.        ",
      },
      {
        id: 4,
        ques: "Accessibilité mondiale        ",
        ans: "Tout le monde a accès à Teleparty Extension. Il est également facilement téléchargeable partout dans le monde. Avec ça extension,  vous pouvez créer des souvenirs avec vos proches. Pour utiliser le Teleparty service utilisez un VPN (réseau virtuellement protégé) fiable. Apprendre teleparty Chrome extension download en quelques étapes simples en visitant notre site Web.  ",
      },
      {
        id: 5,
        ques: "Diffusion de contenu Full HD        ",
        ans: "Teleparty est une approche axée sur la performance extension avec streaming et synchronisation haute résolution. Il améliore ainsi sans aucun doute votre expérience de streaming. Vous pouvez également visionner d’excellents films et séries télévisées en ligne en haute définition. Vous pouvez regarder le contenu dans real-time sync and share it with your loved ones.        ",
      },
      {
        id: 6,
        ques: "Personnalisation des profils        ",
        ans: "En personnalisant votre profil de chat avec l'extension, vous pouvez ajouter du plaisir à votre virtual watch party. Ici, vous avez la possibilité de sélectionner n’importe quel avatar de la collection à utiliser comme photo de profil. De plus, vous pouvez utiliser des surnoms humoristiques et mignons sur votre teleparty extension Chrome profil. N'est-ce pas intéressant ?        ",
      },
      {
        id: 7,
        ques: "Design compact        ",
        ans: "Grâce à l'animation axée sur le divertissement Teleparty extension où vous pouvez utiliser toutes les fonctionnalités étonnantes et profiter gratuitement.        ",
      },
    ],
  },
  sharedLink: {
    title: "Comment organiser une téléparty ?    ",
    desc: [
      "N'oubliez pas qu'un abonnement partagé doit faire partie d'un plan tarifaire premium permettant à de nombreux utilisateurs d'accéder au streaming service for a party immediatement. De plus, il est conseillé d'avoir un abonnement personnel pour regarder du contenu illimité sur teleparty for Chrome.       ",
    ],
  },

  footer: {
    faqTitle: "Questions fréquemment posées    ",

    questions: [
      {
        id: 1,
        ques: "Quel est le but de Teleparty ?        ",
        ans: "À watch a movie or show with a group of friends et votre famille en même temps, vous pouvez le démarrer, l'arrêter et le mettre en pause à l'aide du bouton free Teleparty extension for Google Chrome.        ",
      },
      {
        id: 2,
        ques: "Quelle est la taille d'un watch party inviter puis-je envoyer ?        ",
        ans: "Teleparty permet à un nombre illimité d'utilisateurs d'être dans une pièce à la fois, mais uniquement pour le chat textuel. En plus d'ajouter des avatars plus accrocheurs et de sélectionner un nom pour vous-même, vous pouvez également ajouter des commentaires sur tout ce que vous regardez. teleparty Google Chrome.         ",
      },
      {
        id: 3,
        ques: "Comment puis-je m'inscrire à Teleparty ?        ",
        ans: "Tout d'abord, vous devez download and install the Teleparty extension, alors vous pouvez accéder au streaming service où vous pouvez héberger le watch party en vous connectant. Enfin, pour participer facilement, appuyez sur le lien que l'hôte vous a fourni pour l'invitation et regardez les derniers films et émissions en haute définition sur le teleparty Google Chrome extension.  ",
      },
    ],

    popularSearches: {
      title: "Recherches populaires      ",
      desc: "Teleparty,Teleparty Extension,Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, How to Netflix Party, How to use Netflix Party, How to do Netflix Party, How to do a Netflix Party, How to Watch Netflix Together, Hulu Watch Party, Hulu Party, Watch Party Hulu, How to use Hulu Watch Party, HBO Max Watch Party, Watch Party HBO Max, HBO Watch Party, HBO Go Watch Party, HBO Party, HBO Max Party, Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch, Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Prime Watch Party, Amazon Prime Video Party, Paramount Plus Watch Party, Paramount Party, Peacock TV Party, Peacock Watch Party, Peacock Party      ",
    },

    disclaimer: {
      title: "Clause de non-responsabilité      ",
      desc: "Teleparty, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV sont les marques de leurs propriétaires respectifs. Ce site Web et cette extension n'ont aucune association ou adhésion avec l'une des marques ou sociétés tierces mentionnées.      ",
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
                <h2>À propos de nous</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  TeIl s&apos;agit d&apos;une extension de navigateur étonnante
                  où vous pouvez regarder tous vos films préférés ensemble en
                  même temps et en téléchargeant l&apos;extension, elle se
                  synchronisera automatiquement. Grâce à ses fonctionnalités
                  exceptionnelles, notamment le chat, les appels audio et vidéo,
                  vous pouvez partager vos réflexions tout en regardant une
                  émission. Vous pouvez également créer des souvenirs amusants
                  et précieux en organisant une salle de surveillance. Dans
                  cette extension, vous pouvez diffuser toutes les dernières
                  émissions de différentes plateformes.
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
