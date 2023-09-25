import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Esta es la mejor extensión con sus increíbles funciones como chat, audio y videollamadas.",
  },
  {
    id: 2,
    text: "Ahora puedo invitar a mis amigos a unirse a mí.",
  },
  {
    id: 3,
    text: "Planeé mi película con esta extensión y realmente salió muy bien. Oh, la mejor parte es que puedo compartir mis reacciones a través de emojis. ¡¡Fue tan divertido!!",
  },
  {
    id: 4,
    text: "Es muy fácil de usar y es la mejor manera de ver tus programas favoritos con tus amigos y familiares.",
  },
  {
    id: 5,
    text: "Ahora puedes crear tu propia sala de visualización donde podrás discutir tu escena favorita con tus amigos.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Reviews</h2>
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
