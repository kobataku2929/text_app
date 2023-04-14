import { Button } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../Firebase";

import "./AddPost.css";

function AddPost() {
  const [postBookName, setPostBookName] = useState("");
  const [postAutor, setPostAutor] = useState("");
  const [postCompany, setPostCompany] = useState("");
  const [postBookState, setPostBookState] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      bookName: postBookName,
      verified: true,
      bookState: postBookState,
      company: postCompany,
      author: postAutor,
      timestamp: serverTimestamp(),
    });
    setPostBookName("");
    setPostAutor("");
    setPostCompany("");
    setPostBookState("");
  };

  return (
    <div className="container">
      <div className="addPosts">
        <form method="post" className="addPost">
          <input
            className="bookname"
            value={postBookName}
            placeholder="教科書名"
            type="text"
            onChange={(e) => setPostBookName(e.target.value)}
          ></input>
          <input
            className="author"
            value={postAutor}
            placeholder="著者名"
            type="text"
            onChange={(e) => setPostAutor(e.target.value)}
          ></input>
          <input
            className="company"
            value={postCompany}
            placeholder="出版社・発行所名"
            type="text"
            onChange={(e) => setPostCompany(e.target.value)}
          ></input>
          <input
            className="state"
            value={postBookState}
            placeholder=""
            type="number"
            max={4}
            min={1}
            onChange={(e) => setPostBookState(e.target.value)}
          ></input>

          <Button
            disabled={
              !postBookName || !postAutor || !postCompany || !postBookState
            }
            className="button"
            type="submit"
            onClick={sendPost}
          >
            投稿
          </Button>
        </form>
      </div>
      <div className="post-discription">
        <p className="state-discription">←Gradeを選択</p>
      </div>

      <div className="state-ditail">
        <h4>Gradeの選び方</h4>
        <div className="state-wirte">
          <ul>
            <li>
              Grade <span>4</span> 新品、未使用
            </li>
            <li>
              Grade <span>3</span> 新品、未使用に近い
            </li>
            <li>
              Grade <span>2</span> 消せるペンでの書き込みあり
            </li>
            <li>
              Grade <span>1</span> 消せないペンでの書き込みあり
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
