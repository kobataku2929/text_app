import React, { useEffect, useState } from "react";
import { SearchBook } from "./SearchBook";
import { Post } from "./Post";
import "./Home.css";
import db from "../Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));

    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="Home">
      <div className="top-container">
        <div className="SearchBooks">
          <SearchBook />
        </div>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <Post
            bookName={post.bookName}
            verified={post.verified}
            company={post.company}
            bookState={post.bookState}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
