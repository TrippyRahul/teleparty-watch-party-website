import React from "react";
import Benefits from "@/app/components/Benefits";
import Favorite from "@/app/components/Favorite";
import UseTeleparty from "@/app/components/UseTeleparty";
import HowToUse from "@/app/components/HowToUse";
import SharedLink from "@/app/components/SharedLink";
import Footer from "@/app/components/Footer";
import Features from "@/app/components/Features";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

export const metadata = {
  title: "Teleparty Extension | Explorar Netflix, Hulu + Mas juntos",
  description:
    " Teleparty Extension es la mejor manera de disfrutar de tus películas y series favoritas en una sola plataforma.    ",
  keywords:
    "Teleparty, Teleparty Extension, Teleparty Extension Chrome, Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix party,Teleparty Chrome Extension,  ",
  openGraph: {
    title:
      "Teleparty Extension | Watch HBO Max, Youtube, Netflix, Amazon Prime Video, y muchos más con tus amigos.",
    description:
      "Teleparty Extension es la mejor manera de conectarte con tus seres queridos que viven separados. Aquí puedes transmitir tus películas más esperadas y discutirlas con tus amigos al mismo tiempo.      ",
    url: "https://www.teleparty.pro/spanish",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  htmlAttributes: {
    lang: "es",
  },
  metadataBase: new URL("https://www.teleparty.pro/spanish"),
  alternates: {
    canonical: "/",
    turkish: [
      { href: "/", hreflang: "es-es" },
      { href: "/", hreflang: "es-ar" },
      { href: "/", hreflang: "es-co" },
      { href: "/", hreflang: "es-pe" },
      { href: "/", hreflang: "es-mx" },
      { href: "/", hreflang: "es-cl" },
      { href: "/", hreflang: "es-uy" },
      { href: "/", hreflang: "es-cr" },
      { href: "/", hreflang: "es-bo" },
      { href: "/", hreflang: "es-cu" },
      { href: "/", hreflang: "es-ma" },
    ],
  },
};

const data = {
  useTeleparty: {
    title:
      "Experimenta Teleparty y transmite tus películas favoritas con tus amigos y familiares    ",
    desc: "Descargar el Teleparty Chrome, entonces podrás planificar tu noche de cine con tus seres queridos. Allí tendrás las múltiples plataformas de transmisión, incluidas Netflix, Hulu, Prime Video, HBP Max, Disney Plus, Peacock TV, and Paramount Plus, entre otros servicios. También puedes organizar una fiesta para ver tu película favorita y compartir emojis divertidos mientras conversas. Se sentirá como si simplemente estuvieran sentados contigo. ",
  },

  howToUse: {
    title: "Cómo utilizar la extensión Teleparty    ",
    desc: [
      "Con el Teleparty, Transmite las mejores películas con tus mejores amigos. Aquí tendrás las mejores funciones como chat en vivo y reproducción de contenido sincronizada con tus plataformas de streaming favoritas. Entonces, descarga el Teleparty Chrome extension y disfruta de tu cita al cine con tu amigo especial que vive aparte.",
      "Teleparty Extension es la manera perfecta para quienes buscan varias formas de entretenimiento en una sola plataforma. Es la forma más fácil de usar y tiene funciones sorprendentes donde puedes conectarte con tus seres queridos. esta web extension teleparty funciona sin problemas tanto en Chrome como en Firefox. Ahora crea tu sala de observación e invita a un número ilimitado de personas a unirse. Estas son las instrucciones a continuación para usarlo con éxito. ",
    ],
    questions: [
      {
        id: 1,
        ques: "Instala el Teleparty Extension ",
        ans: "En primer lugar, asegúrese de tener navegadores como Microsoft Edge and Google Chrome. Ahora descarga el teleparty Extension con el enlace del sitio web y mira las últimas películas y series con el Chrome Teleparty extensión. Así que planifica una noche de cine con ellos desde la comodidad de tu hogar.",
      },
      {
        id: 2,
        ques: "Fijar la extensión ",
        ans: "A continuación, después de descargarlo e instalarlo, simplemente fíjelo a la barra de herramientas de su navegador web. Toque, haga clic con el botón derecho en el símbolo TP y presione el ícono de anclar para fijar el botón TP en la barra de herramientas. También puedes localizar el extension tocando el ícono del rompecabezas. También puedes utilizar el Chrome teleparty extension para descargar. ",
      },
      {
        id: 3,
        ques: "Abra su cuenta de transmisión e inicie sesión ",
        ans: "Simplemente revise otras cuentas de transmisión como  Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV.  Debe tener una cuenta válida con una suscripción y recuerde que los miembros que se unan deben tener una cuenta activa. Lo mejor es que cualquiera puede ser el anfitrión y crear una fiesta de observación. ¿Entonces, Qué esperas? Descargue la extensión de teleparty desde Chrome web store ahora y diviértete.        ",
      },
      {
        id: 4,
        ques: "Buscar y mirar ",
        ans: "Busca y mira tu película o serie favorita en tu plataforma preferida para verla y comenzar a transmitirla. También puedes pausar el vídeo y organizar una fiesta de visualización.",
      },
      {
        id: 5,
        ques: "Organizar una fiesta de observación",
        ans: 'Inicie una ventana de visualización de grupo en su navegador y haga clic en el símbolo TP en la barra de herramientas. Esto mostrará una ventana emergente con la etiqueta "Crear una fiesta de visualización". Además, también hay un botón "Iniciar una fiesta" donde puedes crear tu enlace de invitación a Teleparty. Para invitar a sus seres queridos a la fiesta de visualización, envíeles la URL de la invitación. En Google Chrome Teleparty Puedes ver fácilmente las últimas películas y series. Así que date prisa y disfruta de tu película o serie.',
      },
      {
        id: 6,
        ques: "Formas de convertirse en miembro de Teleparty        ",
        ans: "Toca la invitación de Teleparty después de iniciar sesión en tu cuenta de transmisión. Antes de eso, debes tener configurada la extensión correspondiente antes de unirte a la fiesta de visualización. Ahora puede hacer clic en el enlace de la fiesta de observación y crear su fiesta de observación.",
      },
    ],
  },
  features: {
    title: "Funciones ilimitadas de Teleparty",
    questions: [
      {
        id: 1,
        ques: "Uno para todos        ",
        ans: "Con Teleparty podrás tener acceso a múltiples plataformas de streaming y disfrutar de una infinita selección de entretenimiento. Netflix, Hulu, Disney+, Hotstar, Prime Video, HBO Max, Paramount Plus, and Peacock TV son todas las mejores opciones para ver películas o series. Para Netflix party Chrome download, debes tener una conexión a Internet estable y una cuenta válida.        ",
      },
      {
        id: 2,
        ques: "Vigilancia del control del partido        ",
        ans: 'Desde esta extensión, organice una fiesta de observación virtual con sus seres queridos. Es el botón "Solo yo tengo el control" el que está disponible para el anfitrión de la fiesta. Entonces, envía el enlace de invitación a todos tus seres queridos. Puede usar todos los controles para reproducir, pausar, adelantar, rebobinar o reanudar el video fácilmente en Netflix Teleparty Chrome.         ',
      },
      {
        id: 3,
        ques: "Charla grupal        ",
        ans: "Con esta increíble función, puedes establecer más conexiones con tus amigos y familiares mediante la transmisión de películas y series. Aquí puedes compartir tus pensamientos y sentimientos con tus seres queridos mientras transmites tu contenido favorito. Watch party Los miembros pueden utilizar la función de chat grupal para participar en discusiones grupales. Allí también podrás tener Emojis donde podrás expresar lo que sientes ante las escenas más emocionantes.  ",
      },
      {
        id: 4,
        ques: "Accesibilidad mundial        ",
        ans: "De esta característica. Puedes tener acceso a Teleparty Extension. Puedes descargarlo fácilmente tanto en Chrome como en Firefox. Con este extension, Crea tus recuerdos con tus seres queridos. Usar el Teleparty service Utilice una VPN (red virtualmente protegida) confiable. Aprender teleparty Chrome extension download en unos pocos y sencillos pasos visitando nuestro sitio web.         ",
      },
      {
        id: 5,
        ques: "Transmisión de contenido Full HD        ",
        ans: "Teleparty es un enfoque centrado en el rendimiento extension con transmisión y sincronización de alta resolución. También te ayuda a tener la mejor experiencia más allá de toda duda. También puedes ver múltiples películas y series de TV online en calidad HD. Transmita el contenido sincronizado en tiempo real y compártalo con sus seres queridos.        ",
      },
      {
        id: 6,
        ques: "Personalización de perfiles        ",
        ans: "También puedes personalizar tu perfil de chat con la extensión, puedes agregar algunos emojis divertidos a tu fiesta de visualización virtual. Aquí tendrás la opción de seleccionar cualquier avatar de la colección para usarlo como tu foto de perfil. Puedes usar apodos divertidos y lindos en tu teleparty extension Chrome perfil.         ",
      },
      {
        id: 7,
        ques: "Diseño compacto        ",
        ans: "Es el centrado en el entretenimiento. Teleparty extension donde puedes utilizar todas las increíbles funciones y disfrutar de forma gratuita.        ",
      },
    ],
  },

  sharedLink: {
    title: "Cómo organizar una Teleparty?      ",
    desc: [
      " Es una membresía compartida que debe ser parte de un plan de precios premium que permita a muchos usuarios acceder al servicio de transmisión para una fiesta a la vez. Pero es recomendable tener una membresía personal para ver contenido ilimitado en teleparty for Chrome.       ",
    ],
  },
  footer: {
    faqTitle: "Preguntas frecuentes    ",
    questions: [
      {
        id: 1,
        ques: "¿Cuál es el propósito de Teleparty?        ",
        ans: "Para ver una película o un programa con un grupo de amigos y familiares al mismo tiempo, puedes iniciarlo, detenerlo y pausarlo usando el free Teleparty extension for Google Chrome.        ",
      },
      {
        id: 2,
        ques: "¿Qué tamaño de invitación a una fiesta de visualización puedo enviar?        ",
        ans: "Teleparty permite que hasta un número ilimitado de usuarios estén en una sala a la vez, pero solo para chatear por texto. Además de añadir avatares más llamativos y seleccionar un nombre para ti, también puedes añadir comentarios sobre todo lo que estás viendo teleparty Google Chrome.         ",
      },
      {
        id: 3,
        ques: "¿Cómo puedo registrarme en Teleparty?        ",
        ans: "¿Cómo puedo registrarme en Teleparty download and install the Teleparty extension, luego, puede acceder al servicio de transmisión en línea donde puede organizar la fiesta de visualización iniciando sesión. Por último, para participar fácilmente, toque el enlace que el anfitrión le proporcionó para la invitación y mire las últimas películas y programas en alta definición en el teleparty Google Chrome extension.         ",
      },
    ],
    popularSearches: {
      title: "Búsquedas populares      ",
      desc: "Teleparty,Teleparty Extension,Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, How to Netflix Party, How to use Netflix Party, How to do Netflix Party, How to do a Netflix Party, How to Watch Netflix Together, Hulu Watch Party, Hulu Party, Watch Party Hulu, How to use Hulu Watch Party, HBO Max Watch Party, Watch Party HBO Max, HBO Watch Party, HBO Go Watch Party, HBO Party, HBO Max Party, Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch, Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Prime Watch Party, Amazon Prime Video Party, Paramount Plus Watch Party, Paramount Party, Peacock TV Party, Peacock Watch Party, Peacock Party      ",
    },

    disclaimer: {
      title: "Descargo de responsabilidad      ",
      desc: "Teleparty, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV son marcas de sus respectivos dueños. Este sitio web y su extensión no tienen asociación ni membresía con ninguna de las marcas mencionadas o compañías de terceros.      ",
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
                <h2>Sobre nosotros</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Es una increíble extensión de navegador donde puedes ver todas
                  tus películas favoritas juntas al mismo tiempo y, al descargar
                  la extensión, se sincronizará automáticamente. Con sus
                  excelentes funciones que incluyen chat, audio y videollamadas,
                  puedes compartir tus pensamientos mientras miras un programa.
                  También puedes crear recuerdos divertidos y valiosos
                  organizando una sala de observación. En esta extensión, puede
                  transmitir todos los programas más recientes desde varias
                  plataformas. Entonces, guarda tu memoria y disfruta de tu cita
                  virtual con esta extensión.
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
