import React from "react";
import Benefits from "@/app/components/Benefits";
import UseTeleparty from "@/app/components/UseTeleparty";
import HowToUse from "@/app/components/HowToUse";
import SharedLink from "@/app/components/SharedLink";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

export const metadata = {
  title:
    " Teleparty Extension | Keşfetmek Netflix, HBO Max, Amazon Prime Video, ve daha fazlası birlikte",
  description:
    "Teleparty Extension En sevdiğiniz filmleri ve dizileri tek bir platformda birleştirmenin en iyi yoludur.",
  keywords:
    "Teleparty, Teleparty Extension, Teleparty Extension Chrome, Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix party,Teleparty Chrome Extension",
  openGraph: {
    title:
      "Teleparty Extension | Watch HBO Max, Youtube, Netflix, Amazon Prime Video, ve daha birçok şey arkadaşlarınızla.",
    description:
      "Teleparty Extension ayrı yaşayan sevdiklerinizle bağlantı kurmanın en iyi yoludur. Burada en çok beklediğiniz filmleri yayınlayabilir ve aynı anda arkadaşlarınızla tartışabilirsiniz.",
    url: "https://www.teleparty.pro/turkish",
    type: "website",
    images: "https://www.teleparty.pro/main-logo.svg",
  },
  htmlAttributes: {
    lang: "tr",
  },
  metadataBase: new URL("https://www.teleparty.pro/turkish"),
  alternates: {
    canonical: "/",
    turkish: [
      { href: "/", hreflang: "tr-tr" },
      { href: "/", hreflang: "tr-bg" },
      { href: "/", hreflang: "tr-gr" },
      { href: "/", hreflang: "tr-sy" },
      { href: "/", hreflang: "tr-iq" },
      { href: "/", hreflang: "tr-uz" },
      { href: "/", hreflang: "tr-cy" },
    ],
  },
};

const data = {
  useTeleparty: {
    title:
      "Teleparty'yi keşfedin ve en sevdiğiniz filmleri arkadaşlarınız ve ailenizle izleyin",
    desc: "İndir Teleparty Chrome ve sevdiklerinizle film gecenizi planlayın. Filmleri birden fazla akış platformunda yayınlayın:  Netflix, Hulu, Prime Video, HBP Max, Disney Plus, Peacock TV, and Paramount Plus, diğer hizmetlerin yanı sıra. Ayrıca bir izleme partisi düzenleyebilir, en sevdiğiniz filmi izleyebilir ve tartışırken komik emojiler paylaşabilirsiniz. Sanki yanınızda oturuyorlarmış gibi hissedeceksiniz.",
  },
  benefits: {
    title: "Indulge yourself in the ultimate joy of streaming",
    desc: [
      "Just download the extension, and watch amazing shows to enjoy unlimited TV series and movies. In this browser, you will find popular streaming platforms including netflix, teleparty Hulu, amazon prime watch party, HBO max, movies on paramount plus, peacock watch party, hulu watch party and Disney plus watch party.",
      "The extension has great features like audio & video calls along with chat. Create your own watching room to share your special moments with your close ones.",
    ],
  },
  howToUse: {
    title: "Nasıl kullanılır Teleparty extension ",
    desc: [
      "İle Teleparty, En iyi arkadaşlarınızla en iyi filmleri izleyin. Favori yayın platformlarınızla canlı sohbet ve senkronize içerik oynatma gibi en iyi özellikleri deneyimleyin. Yani, yükleyin Teleparty Chrome extension ve ayrı yaşayan özel arkadaşınızla film randevunuzun tadını çıkarın.",
      "Teleparty Uzantı, tek bir platformda çeşitli eğlence biçimleri arayanlar için mükemmel bir yoldur. Kullanmanın en basit yoludur ve yakınlarınızla bağlantı kurabileceğiniz muhteşem özelliklere sahiptir. Bu ağ extension teleparty hem Chrome'da hem de Firefox'ta sorunsuz çalışıyor. İzleme odanızı oluşturun ve sınırsız misafiri katılmaya davet edin. Bunlar, başarıyla kullanmak için aşağıdaki talimatlardır. ",
    ],
    questions: [
      {
        id: 1,
        ques: "Yükle Teleparty Extension",
        ans: "Öncelikle aşağıdaki gibi tarayıcılara sahip olmalısınız: Microsoft Edge and Google Chrome. Şimdi indirin teleparty Extension web sitesi bağlantısıyla ve en yeni film ve dizilerin tamamını izleyin Chrome Teleparty eklenti. Bu yüzden aileniz ve arkadaşlarınızla bir film gecesi planlayın.",
      },
      {
        id: 2,
        ques: "Uzantıyı Sabitle         ",
        ans: "Ardından, web tarayıcınızın araç çubuğuna sabitlemek için indirip yükleyin. Şimdi TP sembolüne sağ tıklayın ve TP düğmesini araç çubuğuna sabitlemek için raptiye simgesine basın. Ayrıca şunları da bulabilirsiniz: extension bulmaca simgesine dokunarak. Ayrıca şunları da kullanabilirsiniz: Chrome teleparty extension indirmek için. ",
      },
      {
        id: 3,
        ques: "Yayın Hesabınızı Açın ve Giriş Yapın",
        ans: "Aşağıdaki gibi akış hesaplarını ziyaret edin:  Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV.  Bunun için geçerli bir aboneliğe sahip hesabınızın olması gerekiyor ve katılan kullanıcıların aktif bir hesabının olması gerektiğini unutmayın. En iyi şey, herkesin ev sahibi olabilmesi ve bir izleme partisi oluşturabilmesidir. Peki ne bekliyorsun? Teleparti uzantısını şuradan indirin: Chrome web store and eğlenin.",
      },
      {
        id: 4,
        ques: "Ara ve izle ",
        ans: "Explore your favorite film or series on your preferred platform to watch and begin streaming. You can also pause the video and host a watch party.",
      },
      {
        id: 5,
        ques: "Seyir Partisi Düzenleyin",
        ans: 'Artık tarayıcınızda bir parti izleme penceresi başlatabilir ve araç çubuğundan TP sembolüne tıklayabilirsiniz. Bu, "Bir İzleme Partisi Oluşturun" etiketli bir açılır pencerenin görünmesini sağlayacaktır. Ayrıca Teleparty davet bağlantınızı oluşturabileceğiniz bir "Parti Başlat" düğmesi de bulunmaktadır. Bu yüzden sevdiklerinizi izleme partisine davet edin ve onlara davetiyenin URL\'sini gönderin. Açık Google Chrome Teleparty en yeni film ve dizileri rahatlıkla izleyebilirsiniz.',
      },
      {
        id: 6,
        ques: "Teleparty Üyesi Nasıl Olunur?",
        ans: "Yayın hesabınızda oturum açtıktan sonra Teleparty davetine dokunun. İzleme partisine katılmadan önce ilgili uzantıyı yapılandırmış olmalısınız. Artık parti izle bağlantısına tıklayıp izleme partinizi oluşturabilirsiniz.",
      },
    ],
  },

  sharedLink: {
    title: " Telepartiye Nasıl Ev Sahipliği Yapılır?",
    desc: [
      "Bu, birçok kullanıcının bir parti için yayın hizmetine aynı anda erişmesine olanak tanıyan premium fiyatlandırma planının bir parçası olması gereken paylaşılan bir üyeliktir. Ancak sınırsız içerik izleyebilmek için kişisel üyeliğe sahip olmanız tavsiye edilir. teleparty for Chrome. ",
    ],
  },

  features: {
    title: "Teleparty'nin En İyi Özellikleri",
    questions: [
      {
        id: 1,
        ques: "Herkes İçin Bir tane ",
        ans: "Teleparty ile birden fazla yayın platformuna erişin ve sonsuz eğlence seçeneklerinin keyfini çıkarın. Netflix, Hulu, Disney+, Hotstar, Prime Video, HBO Max, Paramount Plus, and Peacock TV film veya dizi izlemek için en iyi seçeneklerdir. İçin Netflix party Chrome download, istikrarlı bir internet bağlantınızın ve geçerli bir hesabınızın veya aboneliğinizin olması gerekir.",
      },
      {
        id: 2,
        ques: "Parti Kontrol Saati",
        ans: 'Bu uzantıdan, bir ana makineyi barındırın virtual watch party Ve Uzak mesafe arkadaşlarınızla bir film randevusu planlayın. Partinin sunucusunun kullanabileceği "Yalnızca Kontrol bende" butonudur. O halde davet bağlantısını tüm sevdiklerinize gönderin. Videoyu kolayca oynatmak, duraklatmak, hızlı ileri sarmak, geri sarmak veya devam ettirmek için tüm kontrolleri kullanabilirsiniz. Netflix Teleparty Chrome. ',
      },
      {
        id: 3,
        ques: "Grup Konuşması",
        ans: "Bu inanılmaz özellik sayesinde film ve dizileri yayınlayarak arkadaşlarınız ve ailenizle daha fazla bağlantı kurun. Artık en sevdiğiniz içeriği yayınlarken düşüncelerinizi ve duygularınızı sevdiklerinizle paylaşabilirsiniz. İzleme partisi üyeleri, grup tartışmalarına katılmak için grup sohbeti özelliğini kullanabilir. Burada en heyecan verici sahneler hakkında ne hissettiğinizi ifade edebileceğiniz komik Emojileri paylaşabilirsiniz.        ",
      },
      {
        id: 4,
        ques: "Dünya Çapında Erişilebilirlik",
        ans: "Bu özellikten şunlara erişebilirsiniz: Teleparty Extension ve kolayca indirin. Bununla extension, aileniz ve arkadaşlarınızla anılarınızı yaratın. Kullanmak için Teleparty service Güvenilir bir VPN (Sanal Korumalı Ağ) kullanın. Öğrenmek teleparty Chrome extension download web sitemizi ziyaret ederek birkaç kolay adımda.",
      },
      {
        id: 5,
        ques: "Full HD İçerik Akışı",
        ans: "Teleparty performans odaklıdır extension ile yüksek çözünürlüklü akış ve senkronizasyon. Aynı zamanda en iyi deneyimi yaşamanıza da yardımcı olur. Ayrıca birden fazla filmi ve diziyi çevrimiçi olarak Yüksek kalitede izleyebilirsiniz. Yani içeriği gerçek zamanlı senkronize izleyin ve sevdiklerinizle paylaşın.",
      },
      {
        id: 6,
        ques: "Profillerin Özelleştirilmesi",
        ans: "Ayrıca uzantıyla sohbet profilinizi kişiselleştirebilir, sanal izleme partinize komik emojiler de ekleyebilirsiniz. Burada, profil resminiz olarak kullanmak üzere koleksiyondan herhangi bir avatarı seçme seçeneğiniz olacak. Ayrıca sevimli takma adlar da kullanabilirsiniz. teleparty extension Chrome profil. ",
      },
      {
        id: 7,
        ques: "Kompakt tasarım",
        ans: "Eğlence odaklıdır Teleparty extension tüm şaşırtıcı özellikleri kullanabileceğiniz yer.",
      },
    ],
  },

  footer: {
    faqTitle: "Sıkça Sorulan Sorular    ",
    questions: [
      {
        id: 1,
        ques: "Teleparty'nin amacı nedir?        ",
        ans: " Bir filmi veya programı bir grup arkadaşınızla ve ailenizle aynı anda izlemek için, düğmeyi kullanarak filmi başlatabilir, durdurabilir ve duraklatabilirsiniz. free Teleparty extension for Google Chrome.",
      },
      {
        id: 2,
        ques: "Ne kadar büyük bir izleme partisi davetiyesi gönderebilirim?        ",
        ans: "Teleparty Sınırsız sayıda kullanıcının aynı anda bir odada olmasına izin verir, ancak yalnızca yazılı sohbet için. Daha fazla göz alıcı avatar eklemenin ve kendinize bir ad seçmenin yanı sıra, görüntülediğiniz her şeye yorum da ekleyebilirsiniz. teleparty Google Chrome.        ",
      },
      {
        id: 3,
        ques: "Teleparty'ye nasıl kaydolabilirim?        ",
        ans: "Öncelikle şunları yapmanız gerekir: Teleparty uzantısını indirip yükleyin, ardından giriş yaparak izleme partisine ev sahipliği yapabileceğiniz yayın hizmetine erişebilirsiniz. Son olarak, kolayca katılmak için toplantı sahibinin davet için size sağladığı bağlantıya dokunun ve en yeni filmleri ve şovları izleyin. yüksek çözünürlüklü teleparty Google Chrome extension.         ",
      },
    ],
    popularSearches: {
      title: "popüler aramalar      ",
      desc: "Teleparty,Teleparty Extension,Teleparty Chrome Extension, How to use Teleparty, Install Teleparty, Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, How to Netflix Party, How to use Netflix Party, How to do Netflix Party, How to do a Netflix Party, How to Watch Netflix Together, Hulu Watch Party, Hulu Party, Watch Party Hulu, How to use Hulu Watch Party, HBO Max Watch Party, Watch Party HBO Max, HBO Watch Party, HBO Go Watch Party, HBO Party, HBO Max Party, Disney Plus Party, Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch, Hotstar Party, Hotstar Watch Party, Hotstar Party Chrome Extension, Hotstar Watch Party Extension, Prime Watch Party, Amazon Prime Video Party, Paramount Plus Watch Party, Paramount Party, Peacock TV Party, Peacock Watch Party, Peacock Party,      ",
    },

    disclaimer: {
      title: "Sorumluluk reddi beyanı      ",
      desc: "Teleparty, Teleparty Extension, Netflix, HBO Max, Disney Plus Hotstar, Amazon Prime Video, Hulu, Paramount Plus, And Peacock TV ilgili sahiplerinin markalarıdır. Bu web sitesi ve uzantının, adı geçen markaların veya üçüncü taraf şirketlerin hiçbiriyle hiçbir ilişkisi veya üyeliği yoktur.      ",
    },
  },
};

const page = () => {
  return (
    <>
      <UseTeleparty data={data.useTeleparty} />
      <Benefits data={data.benefits} />
      <HowToUse data={data.howToUse} />
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.headings}>
                <h2>Hakkımızda</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Tüm favori filmlerinizi aynı anda birlikte izleyebileceğiniz
                  ve uzantıyı indirdiğinizde otomatik olarak senkronize
                  edileceği muhteşem bir tarayıcı uzantısıdır. Sohbet, sesli ve
                  görüntülü görüşme gibi harika özellikleri sayesinde bir
                  programı izlerken düşüncelerinizi paylaşabilirsiniz. Ayrıca
                  bir izleme odası düzenleyerek eğlenceli ve değerli anılar
                  yaratabilirsiniz. Bu uzantıda, çeşitli platformlardan en son
                  programların tümünü yayınlayabilirsiniz. Hazır ol netflix
                  birlikte izleme Arkadaşlarınızla birlikte eğlenin ve bu
                  uzantıyla hafızanızı kaydedin.
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
