import React from "react";
import styles from "./Comment.module.css";

const Comment = ({ comment }) => {

  const commentDate = new Date(comment.created_utc * 1000);
  const currentDate = new Date();
  const timeDifference = currentDate - commentDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeAgo;
  if (days > 0) {
    timeAgo = `• ${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    timeAgo = `• ${hours}h ago`;
  } else if (minutes > 0) {
    timeAgo = `• ${minutes} min ago`;
  } else {
    timeAgo = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  return (
    <div className={styles.CommentContainer}>
      <div className={styles.AuthorAndTime}>
        <span className={styles.author}>{comment.author}</span>
        <span className={styles.time}>{timeAgo}</span>
      </div>
      <div className={styles.Body}>
        <p>{comment.body}</p>
      </div>
      <div className={styles.ButtonsContainer}>
        <button className={styles.button}><i className="fas fa-arrow-up"></i>
        Vote<i className="fas fa-arrow-down"></i>
        </button>
        <button className={styles.button}><i className="fas fa-comment-alt"></i>
        Reply</button>
        <button className={styles.button}><i className="fas fa-award"></i>
        Award</button>
        <button className={styles.button}><i className="fas fa-share"></i>
        Share</button>
        <button className={styles.button}>. . .</button>
      </div>
    </div>
  );
};

export default Comment;
