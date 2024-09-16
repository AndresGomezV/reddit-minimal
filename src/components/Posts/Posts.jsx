import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!subreddit) return;

      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        if (response.ok) {
          const jsonResponse = await response.json();
          setPosts(jsonResponse.data.children.map((child) => child.data));
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts(); 
  }, [subreddit]);

  return (
    <div className={styles.MainContainer}>
      <div className={styles.PostsContainer}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
