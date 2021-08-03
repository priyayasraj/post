import React from "react";
import GetPosts from "./GetPosts";
import PostItems from "./PostItems";

const PostList = () => {
  const posts = GetPosts();
  const renderedList = posts.map((post) => {
    return (
      <div key={post.id}>
        <PostItems post={post} />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default PostList;
