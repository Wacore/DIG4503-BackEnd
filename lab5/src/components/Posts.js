import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  // using useState to define a state called Posts
  const [posts, setPosts] = useState();

  // using useEffect to fetch data from the API.
  useEffect(() => {
    // using axios to call the API
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // if fullfilled, update the contents of the posts
      setPosts(res.data);
    });
  }, []);

  // render the Posts data
  return (
    <div>
      <h1>Posts</h1>
      {posts &&
        posts.map((p) => {
          const { id, title, body } = p;
          return (
            <div key={id}>
              <h3>Title: {title}</h3>
              <p>{body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
