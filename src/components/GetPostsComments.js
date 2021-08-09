import { useState, useEffect } from "react";
import axios from "axios";
const commentURL = "https://jsonplaceholder.typicode.com/comments";

const GetPostsComments = (postId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getUserComments = async () => {
      const { data } = await axios.get(commentURL, {
        params: {
          postId: postId,
        },
      });
      setComments(data);
    };

    getUserComments();
  }, [postId]);
  return comments;
};

export default GetPostsComments;
