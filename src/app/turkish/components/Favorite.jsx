import React from "react";
import styles from "@/app/styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/3(1).png"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>netflix aynı anda izleme</h2>{" "}
            </div>
            <div className={styles.desc}>
              <p>
                Bu uzantıda, en sevdiğiniz filmi izlerken gerçek zamanlı
                tepkileri paylaşabileceğiniz kendi izleme odanızı da
                oluşturabilirsiniz. Ancak bu deneyimi yaşamak için indirmeniz
                gerekiyor teleparty indir tarayıcınızda ve bundan sonra otomatik
                olarak senkronize edilecektir. Bu sayede siz ve arkadaşlarınız
                aynı anda yayın yapabilirsiniz. Sadece ikinizin de tam zamanında
                giriş yapması gerekiyor. Size sinemada film izliyormuşsunuz
                hissini verecek en iyi HD kalitesine sahiptir. Ayrıca mümkün
                olduğunca çok arkadaşınızı davet edebileceğiniz bir partiye de
                ev sahipliği yapabilirsiniz.
              </p>
            </div>
            <div className={styles.headings}>
              <h2>netflix party nasıl yapılır</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Bu çok kolay ve basit bir işlemdir. Öncelikle tarayıcınızda
                Teleparty uzantısını arayın ve ardından uzantıyı indirip
                yükleyin. Artık Netflix, Disney Plus ve daha pek çok favori
                yayın platformunuzu arayabilir ve izlemek istediğiniz programı
                seçebilirsiniz. Arkadaşlarınızı ve ailenizi filmi yayınlamaya
                davet etmek için bir URL bağlantısı oluşturabilirsiniz.
                Görüntülemek istediğiniz videoya veya programa tıklayın. Sohbet,
                sesli ve görüntülü aramalar dahil en iyi deneyimi yaşamak için
                harika özelliklerini de kullanabilirsiniz. O halde hazır olun
                uzaktan beraber film izleme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
