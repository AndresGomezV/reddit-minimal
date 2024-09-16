import React from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Topics from "./components/Topics/Topics";
import styles from "./App.module.css";

const App = () => {
  return (
   < div className={styles.gen}>
    <Header />
    <div className={styles.app}>
      
      <div className={styles.topics}>
        <Topics />
      </div>
      <div className={styles.posts}>
        <Posts />
      </div>
      <Comments />
    </div>
    </div>
  );
};

export default App;

/*

App will have the following components:
1. Header
1.1 Posts
1.2 Post
2. Comments
3. Comment
4. Subreddits
5. Subreddit
6. SearchBar 
7.Reddit API

*/
