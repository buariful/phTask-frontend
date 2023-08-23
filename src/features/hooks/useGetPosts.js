import { useState } from "react";

const useGetPosts = async () => {
  const [isGotPosts, setGettingPosts] = useState(false);
  console.log(process.env.REACT_APP_SERVER_URL);
  await fetch(`${process.env.REACT_APP_SERVER_URL}/post/all`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  setGettingPosts(true);
  return isGotPosts;
};

export default useGetPosts;
