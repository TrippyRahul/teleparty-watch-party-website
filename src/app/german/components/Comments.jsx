import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Dies ist die beste Erweiterung mit ihren unglaublichen Funktionen wie Chat, Audio- und Videoanrufen.",
  },
  {
    id: 2,
    text: "Jetzt kann ich meine Freunde einladen, sich mir anzuschließen",
  },
  {
    id: 3,
    text: "Ich habe meinen Film mit dieser Erweiterung geplant und es lief wirklich so gut. Oh, das Beste daran ist, dass ich meine Reaktionen über Emojis teilen kann. Es war so lustig!!",
  },
  {
    id: 4,
    text: "Es ist so einfach zu bedienen und die beste Möglichkeit, Ihre Lieblingssendungen mit Ihren Freunden und Ihrer Familie anzusehen",
  },
  {
    id: 5,
    text: "Jetzt können Sie Ihren eigenen Beobachtungsraum erstellen, in dem Sie Ihre Lieblingsszene mit Ihren Freunden besprechen können.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Rezensionen</h2>
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
