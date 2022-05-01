import React, { useEffect, useState } from "react";

const UsingFetch = () => {
  //use state to store our posts
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        //this sets posts hook array variable to "data"
        setPosts(data);
        console.log(data);
      });
  };

  //we dont need a click event, we can just use effect
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 && (
        <ul>
          {/* this post parameter becomes each singular post */}
          {posts.map((post) => (
            <li key={post.id}>
              {post.title} {post.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsingFetch;
