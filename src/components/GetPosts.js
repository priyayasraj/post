import React, { useState, useEffect } from "react";
import axios from "axios";
const postURL = "https://jsonplaceholder.typicode.com/posts";

const GetPosts = () => {
  
  //const [output, setOutput] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getUserPosts = async () => {
      const { data } = await axios.get(postURL);
      setPosts(data);
    };
    getUserPosts();
  }, []);

  return posts;
};

export default GetPosts;
