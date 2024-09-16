import React, { useState } from "react";
import styles from "./Post.module.css";
import Comments from "../Comments/Comments";
const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  // Convertir el valor epoch a una fecha
  const postDate = new Date(post.created_utc * 1000); // Se multiplica por 1000 porque está en segundos

  // Obtener la fecha actual
  const currentDate = new Date();

  // Calcular la diferencia en milisegundos
  const timeDifference = currentDate - postDate;

  // Convertir la diferencia a minutos, horas o días
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Mostrar el tiempo transcurrido
  let timeAgo;
  if (days > 0) {
    timeAgo = `• ${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    timeAgo = `• ${hours} hr. ago`;
  } else if (minutes > 0) {
    timeAgo = `• ${minutes} min. ago`;
  } else {
    timeAgo = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  // Verificar si el post tiene una imagen y no es un thumbnail genérico
  const imageUrl =
    post.thumbnail && post.thumbnail !== "self" && post.thumbnail !== "default"
      ? post.thumbnail
      : null;

  return (
    <div>
      <div className={styles.PostContainer}>
        <div className={styles.AuthorAndTime}>
          <span>r/{post.author}</span>
          <span>{timeAgo}</span>
        </div>
        <div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.selftext}>{post.selftext}</p>
          {imageUrl && (
            <div>
              <img src={imageUrl} alt="Post thumbnail" className={styles.img} />
            </div>
          )}
        </div>
        <div className={styles.ButtonsContainer}>
          <button className={styles.button}>
            <i className="fas fa-arrow-up"></i>
            {post.score}
            <i className="fas fa-arrow-down"></i>
          </button>

          <button onClick={handleShowComments} className={styles.button}>
            <i className="fas fa-comment-alt"></i> {/* Icono de comments */}
            <span>{post.num_comments}</span> {/* Número de comentarios */}
            {showComments ? (
              <i className="fas fa-chevron-up"></i> // Icono para "Hide"
            ) : (
              <i className="fas fa-chevron-down"></i> // Icono para "Show"
            )}
          </button>

          <button className={styles.button}>
            <i className="fas fa-award"></i>
          </button>
          <button className={styles.button}>
            <i className="fas fa-share"></i>
            Share
          </button>
          <button className={styles.button}>Report</button>
        </div>
      </div>
      {showComments && <Comments postId={post.id} />}
    </div>
  );
};

export default Post;
