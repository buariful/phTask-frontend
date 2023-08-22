import React from "react";
import AddPost from "../component/home/AddPost";
import TopPosts from "../component/home/TopPosts";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <AddPost />
      <TopPosts />
    </div>
  );
};

export default Home;
