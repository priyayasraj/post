import React, { useState } from "react";
import GetPostsComments from "./GetPostsComments";

const PostItems = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonText = isOpen ? "Show Less" : "Show More";

  const comments = GetPostsComments(post.id);

  const renderedComments = comments.map((comment) => {
    return <div key={comment.id}>{comment.body}</div>;
  });

  const onCLickShowMore = (postId) => {
    setIsOpen(!isOpen);   // 
   
    const isActive = !isOpen;
    if (isActive) {
      setActive("active");
    } else if (!isActive ) {
      setActive(" ");
    }
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="ui top attached tabular menu">
          <div
            className="active item"
            onClick={() => onCLickShowMore(post.id)}
          >
            {/*<button
              className="ui button"
              onClick={() => onCLickShowMore(post.userId)}
            >
              {buttonText}
            </button> */}
            {buttonText}
          </div>
        </div>
        <div className={`ui bottom attached ${active} tab segment`}>
          {renderedComments}
        </div>
      </div>
    </div>
  );
};

export default PostItems;
