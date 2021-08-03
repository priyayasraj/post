import React, { useState } from "react";
import GetPostsComments from "./GetPostsComments";

const PostItems = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [active, setActive] = useState("");
  const buttonText = isOpen ? "Show Less" : "Show More";

  const comments = GetPostsComments(post.userId);

  const renderedComments = comments.map((comment) => {
    return <div key={comment.id}>{comment.body}</div>;
  });

  const onCLickShowMore = (postId) => {
    setIsOpen(!isOpen);
    setCurrentId(postId);
    if (isOpen ) {
      setActive("active");
    } 
    else if(!isOpen && postId === currentId){
      setActive(" ");
    }
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="ui top attached tabular menu">
          <div className="active item">
            <button
              className="ui button"
              onClick={() => onCLickShowMore(post.userId)}
            >
              {buttonText}
            </button>
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
