import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchCommentss = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchCommentss();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
