import React from "react";
import Benefits from "@/app/components/Benefits";
import Favorite from "@/app/components/Favorite";
import About from "@/app/components/About";
import UseTeleparty from "@/app/components/UseTeleparty";
import HowToUse from "@/app/components/HowToUse";
import SharedLink from "@/app/components/SharedLink";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

export const metadata = {
  title:
    "Teleparty Extension | Explorar Netflix, HBO Max, Amazon Prime Video, e muito mais juntos  ",
  description:
    "Teleparty Extension é a melhor maneira de assistir seus filmes e séries favoritos em uma plataforma.    ",
  keywords:
    "Teleparty, Teleparty Extension, Teleparty Extension Chrome, Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix party,Teleparty Chrome Extension  ",
  openGraph: {
    title:
      "Teleparty Extension | Watch HBO Max, Youtube, Netflix, Amazon Prime Video, e muito mais com seus amigos.    ",
    description:
      "Teleparty Extension é a melhor maneira de se conectar com seus entes queridos que moram separados. Aqui você pode transmitir seus filmes mais esperados e discuti-los com seus amigos ao mesmo tempo.",
    url: "https://www.teleparty.pro/portuguese",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  htmlAttributes: {
    lang: "pt",
  },
  metadataBase: new URL("https://www.teleparty.pro/portuguese"),
  alternates: {
    canonical: "/",
    turkish: [
      { href: "/", hreflang: "pt-pt" },
      { href: "/", hreflang: "pt-ao" },
      { href: "/", hreflang: "pt-br" },
      { href: "/", hreflang: "pt-mo" },
    ],
  },
};

const data = {
  useTeleparty: {
    title:
      "Descubra o Teleparty e transmita seus filmes favoritos com seus amigos e familiares    ",
    desc: "Basta baixar o Teleparty Chrome, você pode planejar sua noite de cinema com seus entes queridos. Existem várias plataformas de streaming, como  Netflix, Hulu, Prime Video, HBP Max, Disney Plus, Peacock TV, and Paramount Plus, entre outros serviços. Você também pode organizar uma festa para assistir seu filme favorito e compartilhar emojis engraçados enquanto discutem. Será como se eles estivessem apenas sentados com você. ",
  },
  howToUse: {
    title: "Como usar o Teleparty extension     ",
    desc: [
      " Com o Teleparty, você pode assistir filmes com seus melhores amigos. Aqui você terá recursos incríveis como chat ao vivo e reprodução de conteúdo sincronizada com suas plataformas de streaming favoritas. Então, baixe o Teleparty Chrome extension e aproveite seu encontro no cinema com seu amigo especial que mora separado.      ",
      "Teleparty A extensão é o melhor caminho para quem busca diversas formas de entretenimento em uma só plataforma. É a maneira mais fácil de usar e possui recursos incríveis onde você pode se conectar com seus entes próximos. Esta teia extension teleparty funciona perfeitamente no Chrome e no Firefox. Aqui você também pode criar sua sala de observação e convidar um número ilimitado de pessoas para participar. Estas são as instruções abaixo para usá-lo com sucesso.       ",
    ],
    questions: [
      {
        id: 1,
        ques: "Instale o Teleparty Extension         ",
        ans: "Em primeiro lugar, você deve ter certeza de que possui navegadores como Microsoft Edge and Google Chrome. Agora baixe o teleparty Extension with o link do site e assista a todos os filmes e séries mais recentes com o Chrome Teleparty extension. Então, vamos passar uma noite de cinema com eles no conforto da sua casa.        ",
      },
      {
        id: 2,
        ques: "Fixe a extensão         ",
        ans: "A seguir, após baixar e instalar, basta fixá-lo na barra de ferramentas do seu navegador. Em seguida, clique com o botão direito no símbolo TP e pressione o ícone de alfinete para fixar o botão TP na barra de ferramentas. Você também pode localizar o extension tocando no ícone do quebra-cabeça. Você também pode usar o Chrome teleparty extension para baixar.         ",
      },
      {
        id: 3,
        ques: "Abra sua conta de streaming e faça login        ",
        ans: "Você pode acessar outras contas de streaming, como  Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV.  Você deve ter uma conta válida com assinatura e lembre-se dos membros que estão ingressando devem ter uma conta ativa. O melhor é que qualquer pessoa pode ser o anfitrião e criar uma watch party. Então, o que você está esperando? Baixe a extensão teleparty do Chrome web store agora.        ",
      },
      {
        id: 4,
        ques: "Pesquise e assista ",
        ans: "Pesquise seu filme ou série favorito na plataforma de sua preferência para assistir e iniciar a transmissão. Você também pode pausar o vídeo e organizar uma festa para assistir.        ",
      },
      {
        id: 5,
        ques: "Organize uma festa de observação        ",
        ans: "Agora inicie uma janela de watch party em seu navegador e clique no símbolo TP na barra de ferramentas. Isso fará com que uma janela pop-up chamada “Criar um grupo de observação” apareça. Além disso, há também um botão “Iniciar uma festa”, onde você pode criar seu link de convite para Teleparty. Para convidar seus entes queridos para a festa de observação, envie-lhes o URL do convite. Sobre Google Chrome Teleparty você pode assisti-los facilmente. Então, corra e curta seu filme ou série.        ",
      },
      {
        id: 6,
        ques: "Maneiras de se tornar um membro da Teleparty        ",
        ans: "Toque no convite da Teleparty após fazer login em sua conta de streaming. Para isso você deve ter o ramal relevante configurado antes de entrar no grupo de observação. Agora você pode clicar no link Watch Party e criar seu próprio Watch Party.        ",
      },
    ],
  },
  features: {
    title: "Recursos maravilhosos do Teleparty    ",
    questions: [
      {
        id: 1,
        ques: "Um para todos        ",
        ans: "Com Teleparty você pode ter acesso a várias plataformas de streaming importantes e desfrutar de uma seleção infinita de entretenimento. Netflix, Hulu, Disney+, Hotstar, Prime Video, HBO Max, Paramount Plus, and Peacock TV são as melhores opções para assistir a festas. Para Netflix party Chrome download, você deve ter uma conexão estável com a Internet e uma conta válida.        ",
      },
      {
        id: 2,
        ques: "Relógio de controle de festa        ",
        ans: "A partir desta extensão, hospede um virtual watch party. O botão “Só eu tenho controle” está disponível para o anfitrião da festa. Então, convide todos os seus entes queridos. Você pode usar todos os controles para reproduzir, pausar, avançar, retroceder ou retomar o vídeo facilmente no Netflix Teleparty Chrome.         ",
      },
      {
        id: 3,
        ques: "Conversa em grupo        ",
        ans: "Com esse recurso incrível, você pode fazer mais conexões com seus amigos e familiares por meio do streaming de filmes e séries. Aqui você pode compartilhar seus pensamentos e sentimentos com seus entes queridos enquanto transmite seu conteúdo favorito. Watch party os membros podem usar o recurso de bate-papo em grupo para participar de discussões em grupo. Lá você também pode ter Emojis onde você pode expressar como se sente em relação às cenas mais emocionantes.        ",
      },
      {
        id: 4,
        ques: "Acessibilidade Mundial",
        ans: "Tenha acesso a Teleparty Extension. É facilmente baixável do Chrome e do Firefox. Com isso extension, crie suas memórias com entes queridos. Para usar o Teleparty service utilize uma VPN (rede virtualmente protegida) confiável. Aprenderteleparty Chrome extension download em algumas etapas fáceis visitando nosso site.",
      },
      {
        id: 5,
        ques: "Streaming de conteúdo Full HD",
        ans: "Teleparty é focado no desempenho extension com streaming e sincronização de alta resolução. Também ajuda você a ter a melhor experiência sem dúvidas. Você também pode assistir excelentes filmes e séries de TV online em alta definição. Transmita o conteúdo em sincronização em tempo real e compartilhe-o com seus entes queridos.        ",
      },
      {
        id: 6,
        ques: "Personalização de Perfis",
        ans: "Ao personalizar seu perfil de bate-papo com a extensão, você pode adicionar um pouco de diversão ao seu virtual watch party através de emojis. Aqui você terá a opção de selecionar qualquer avatar da coleção para usar como foto de perfil. Você pode usar apelidos engraçados e fofos em seu teleparty extension Chrome perfil. ",
      },
      {
        id: 7,
        ques: "Design compacto",
        ans: "Este é o foco no entretenimento Teleparty extension onde você pode usar todos os recursos incríveis e se divertir gratuitamente.        ",
      },
    ],
  },
  sharedLink: {
    title: " Como hospedar uma telefesta?      ",
    desc: [
      "É uma assinatura compartilhada que precisa fazer parte de um plano de preços premium que permite que muitos usuários acessem o streaming service for a party de uma vez só. Além disso, é aconselhável ter uma assinatura pessoal para assistir a conteúdo ilimitado no teleparty for Chrome. ",
    ],
  },
  benefits: {
    title: "Indulge yourself in the ultimate joy of streaming",
    desc: [
      "Just download the extension, and watch amazing shows to enjoy unlimited TV series and movies. In this browser, you will find popular streaming platforms including netflix, teleparty Hulu, amazon prime watch party, HBO max, movies on paramount plus, peacock watch party, hulu watch party and Disney plus watch party.",
      "The extension has great features like audio & video calls along with chat. Create your own watching room to share your special moments with your close ones.",
    ],
  },

  favorite: [
    {
      title: "Watch Together",
      desc: [
        "Just logging together and share the link with your loved ones in order to have stream party fun. It will also help in the fast buffering and high-quality video.",
      ],
    },
    {
      title: "Watch Together",
      desc: [
        "Just logging together and share the link with your loved ones in order to have stream party fun. It will also help in the fast buffering and high-quality video.",
      ],
    },
  ],

  about: {
    title: "About Teleparty",
    desc: [
      "Teleparty is a fantastic extension, where you can watch movies together at the same time. It has great features like chat, audio and video calls which synchronizes playback on your browser. Create your fun memories with your family and friends.",
      "In this extension, you can watch netflix together as well as watch HBO Max with friends and family. Enjoy the latest series or movies on various platforms. Save your memory and share your thoughts while streaming your favorite content.",
    ],
  },

  footer: {
    faqTitle: "perguntas frequentes ",

    questions: [
      {
        id: 1,
        ques: "Qual é o objetivo da Teleparty?        ",
        ans: "Para assistir a um filme ou programa com um grupo de amigos e familiares ao mesmo tempo, você pode iniciar, parar e pausar usando o free Teleparty extension for Google Chrome.",
      },
      {
        id: 2,
        ques: "Qual o tamanho do convite para uma watch party que posso enviar?        ",
        ans: "Teleparty permite que um número ilimitado de usuários esteja em uma sala ao mesmo tempo, mas apenas para bate-papo por texto. Além de adicionar avatares mais atraentes e selecionar um nome para você, você também pode adicionar comentários sobre tudo o que está vendo teleparty Google Chrome. ",
      },
      {
        id: 3,
        ques: "Como posso me inscrever no Teleparty?",
        ans: "Em primeiro lugar, você precisa baixar e instalar a extensão Teleparty, então você pode acessar o serviço de streaming onde pode hospedar a watch party fazendo login. Por último, para participar facilmente, toque no link que o anfitrião forneceu para o convite e assista ao filmes e programas mais recentes em alta definição no teleparty Google Chrome extension. ",
      },
    ],

    popularSearches: {
      title: "Pesquisas populares      ",
      desc: "Teleparty,Teleparty Extension,Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, How to Netflix Party, How to use Netflix Party, How to do Netflix Party, How to do a Netflix Party, How to Watch Netflix Together, Hulu Watch Party, Hulu Party, Watch Party Hulu, How to use Hulu Watch Party, HBO Max Watch Party, Watch Party HBO Max, HBO Watch Party, HBO Go Watch Party, HBO Party, HBO Max Party, Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch, Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Prime Watch Party, Amazon Prime Video Party, Paramount Plus Watch Party, Paramount Party, Peacock TV Party, Peacock Watch Party, Peacock Party ",
    },

    disclaimer: {
      title: "Isenção de responsabilidade      ",
      desc: "Teleparty, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV são as marcas de seus respectivos proprietários. Este site e extensão não possuem associação ou associação com nenhuma das marcas mencionadas ou empresas terceirizadas.",
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
                <h2>Sobre nós</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  É um navegador incrível netflix party extension onde você pode
                  assistir todos os seus filmes favoritos ao mesmo tempo e
                  baixando a extensão ela será sincronizada automaticamente. Com
                  seus excelentes recursos, incluindo bate-papo, chamadas de
                  áudio e vídeo, você pode compartilhar suas ideias enquanto
                  assiste a um programa. Você também pode criar memórias
                  divertidas e valiosas organizando uma sala de observação.
                  Nesta extensão, você pode transmitir todos os programas mais
                  recentes de várias plataformas.
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
