import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Bu, sohbet, sesli ve görüntülü aramalar gibi inanılmaz özellikleriyle en iyi uzantıdır.",
  },
  {
    id: 2,
    text: "Artık arkadaşlarımı bana katılmaya davet edebilirim",
  },
  {
    id: 3,
    text: "Filmimi bu uzantıyla planladım ve gerçekten çok iyi geçti. Ah, en güzel tarafı da tepkilerimi emojiler aracılığıyla paylaşabiliyorum. Çok eğlenceliydi!!",
  },
  {
    id: 4,
    text: "Kullanımı çok kolaydır ve en sevdiğiniz programları arkadaşlarınız ve ailenizle izlemenin en iyi yoludur",
  },
  {
    id: 5,
    text: "Artık arkadaşlarınızla en sevdiğiniz sahneyi tartışabileceğiniz kendi izleme odanızı oluşturabilirsiniz.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Yorumlar</h2>
        <div className={styles.content}>
          {data.map((comment) => (
            <div className={styles.card} key={comment.id}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
