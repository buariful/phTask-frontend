import React from "react";
import Post from "../component/media/Post";
import { useSelector } from "react-redux";

const Media = () => {
  const posts = useSelector((state) => state.posts.data);
  return (
    <div className="w-11/12 xl:w-8/12 mx-auto my-10">
      {posts.map((post) => (
        <Post data={post} key={post?._id} />
      ))}
    </div>
  );
};

export default Media;
