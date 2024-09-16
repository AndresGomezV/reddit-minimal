import React, { useEffect, useState } from "react";
import styles from "./Topics.module.css";

const Topics = ({ onSelectSubreddit }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch("https://www.reddit.com/subreddits.json");
        if (response.ok) {
          const jsonResponse = await response.json();
          setTopics(jsonResponse.data.children.map((child) => child.data));
        } else {
          console.error("Failed to fetch topics");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, []);

  return (
    <div className={styles.MainContainer}>
      <div className={styles.TopicsContainer}>
        <h4>TOPICS</h4>
        <ul>
          {topics.map((subreddit) => (
            <li
              key={subreddit.id}
              onClick={() => onSelectSubreddit(subreddit.display_name)}
            >
              <img
                src={subreddit.icon_img}
                alt=""
                style={{ maxWidth: "10%" }}
              />
              {subreddit.display_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topics;

// title, icon_img, display_name
