import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../posts/postSlice";

const useGetPosts = async () => {
  const [isGotPosts, setGettingPosts] = useState(false);
  const dispatch = useDispatch();

  await fetch(`${process.env.REACT_APP_SERVER_URL}/post/all`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(setPosts(res.data));
    })
    .catch((err) => console.log(err));
  setGettingPosts(true);
  return isGotPosts;
};

export default useGetPosts;
