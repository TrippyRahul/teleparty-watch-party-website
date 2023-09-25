import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "C'est la meilleure extension avec ses fonctionnalités incroyables telles que le chat, les appels audio et vidéo. ",
  },
  {
    id: 2,
    text: "Maintenant, je peux inviter mes amis à me rejoindre",
  },
  {
    id: 3,
    text: "J'ai planifié mon film avec cette extension et ça s'est vraiment très bien passé. Oh, le meilleur, c'est que je peux partager mes réactions via des emojis. C'était tellement amusant!!",
  },
  {
    id: 4,
    text: "C'est si facile à utiliser et c'est la meilleure façon de regarder vos émissions préférées avec vos amis et votre famille.",
  },
  {
    id: 5,
    text: "Désormais, vous pouvez créer votre propre salle de visionnage où vous pourrez discuter de votre scène préférée avec vos amis.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Commentaires</h2>
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
