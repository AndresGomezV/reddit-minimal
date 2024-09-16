import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import Post from "../Post/Post";

const Posts = ({ subreddit, searchTerm }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let url = "https://www.reddit.com/r/all/search.json?q=" + encodeURIComponent(searchTerm) + "&sort=relevance";
      
      if (subreddit) {
        url = `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(searchTerm)}&restrict_sr=1&sort=relevance`;
      }

      try {
        const response = await fetch(url);
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

    if (searchTerm) {
      fetchPosts();
    }
  }, [subreddit, searchTerm]); // Ejecutar cuando cambie subreddit o searchTerm

  return (
    <div className={styles.PostsContainer}>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found for the search term "{searchTerm}"</p>
      )}
    </div>
  );
};

export default Posts;
