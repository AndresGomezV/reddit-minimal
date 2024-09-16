import React, { useState } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Topics from "./components/Topics/Topics";
import styles from "./App.module.css";

const App = () => {
  const [selectSubreddit, setSelectSubreddit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onSelectSubreddit = (subreddit) => {
    setSelectSubreddit(subreddit);
  };

  const onSearchTerm = (term) => {
    setSearchTerm(term);
    setSelectSubreddit(null); //limpiar el Subreddit seleccionado si se encontro algo
  };

  return (
    <div className={styles.gen}>
      <Header onSearchterm={onSearchTerm} />
      <div className={styles.app}>
        <div className={styles.topics}>
          <Topics onSelectSubreddit={onSelectSubreddit} />
        </div>
        <div className={styles.posts}>
          <Posts subreddit={selectSubreddit} searchTerm={searchTerm}/>
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
