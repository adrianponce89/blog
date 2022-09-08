import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awating moderation";
    }
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    const style = {
      color:
        comment.status === "pending"
          ? "green"
          : comment.status === "rejected"
          ? "red"
          : "black",
    };
    return (
      <li key={comment.id} style={style}>
        {content}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
