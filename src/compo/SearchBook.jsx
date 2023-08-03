import React, { useState, useEffect, useRef } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import db from "../Firebase";
import "./SearchBook.css";

export const SearchBook = () => {
  const [posts, setPosts] = useState([]);

  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSearch = () => {
    setSearchQuery(
      posts.filter((post) =>
        post.bookName.toLowerCase().includes(ref.current.value)
      )
    );
  };

  useEffect(() => {
    const postData = collection(db, "posts");
    onSnapshot(postData, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="Recearch">
      <div className="main">
        <h2>教科書検索</h2>
        <input
          className="searchbox"
          type="text"
          ref={ref}
          placeholder="教科書名"
          onChange={() => handleSearch()}
        />

        <div className="results">
          {searchQuery.map((post) => (
            <div className="result" key={post.bookName}>
              <p className="result-book-name">
                <span>教科書: </span>
                {post.bookName}
              </p>
              <p className="result-author">
                <span>著者名: </span>
                {post.author}
              </p>
              <p className="result-company">
                <span>会社名: </span>
                {post.company}
              </p>
              <p className="result-book-state">
                <span>Grade: </span>
                {post.bookState}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
