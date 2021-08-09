import React, { useState ,useEffect} from "react";
import axios from "axios";
import PostItems from "./PostItems";
const postURL = "https://jsonplaceholder.typicode.com/posts";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getUserPosts = async () => {
      const { data } = await axios.get(postURL);
      setPosts(data);
    };
    getUserPosts();
  }, [setPosts]);

  const renderedPostList = posts.map((post) => {
    return (
      <div key={post.id}>
        <PostItems post={post} />
      </div>
    );
  });

  return <div>{renderedPostList}</div>;
};

export default PostList;
