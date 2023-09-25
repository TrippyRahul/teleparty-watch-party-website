import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Esta é a melhor extensão com seus recursos incríveis como chat, chamadas de áudio e vídeo.",
  },
  {
    id: 2,
    text: "Agora posso convidar meus amigos para se juntarem a mim",
  },
  {
    id: 3,
    text: "Planejei meu filme com essa extensão e realmente deu muito certo. Ah, a melhor parte é que posso compartilhar minhas reações por meio de emojis. Foi tão divertido!!",
  },
  {
    id: 4,
    text: "É tão fácil de usar e é a melhor maneira de assistir seus programas favoritos com seus amigos e familiares",
  },
  {
    id: 5,
    text: "Agora você pode criar sua própria sala de exibição onde poderá discutir sua cena favorita com seus amigos.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Avaliações</h2>
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
