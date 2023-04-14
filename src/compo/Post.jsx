import React from "react";
import "./Post.css";

export function Post({ bookName, verified, company, bookState, author }) {
  return (
    <div className="post">
      <p className="postbook-name">
        <span>教科書: </span>
        {bookName}
      </p>
      <p className="postauthor">
        <span>著者名: </span>
        {author}
      </p>
      <p className="postcompany">
        <span>会社名: </span>
        {company}{" "}
      </p>
      <p className="postbook-state">
        <span>Grade: </span>
        {bookState}
      </p>
    </div>
  );
}

export default Post;
