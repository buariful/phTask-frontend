import React from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { AiFillLike } from "react-icons/ai";
import "./post.css";

const Post = () => {
  return (
    // <Card className="mb-5 shadow-[rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px]">
    <Card className="post_container">
      <CardBody>
        <div className="flex items-center gap-3 mb-3">
          <img
            src={require("../../images/profile.png")}
            alt=""
            className="w-8 rounded-full"
          />
          <b className="text-sm">Name</b>
        </div>

        <p className="post_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id earum
          facere fuga dignissimos. Repellat distinctio impedit corporis maiores!
          Aliquid non cum placeat molestias fugiat. Error nam facere saepe
          officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores in quisquam molestiae. Facilis deserunt laboriosam, minus ea
          debitis non ducimus ad laborum mollitia blanditiis maxime saepe nihil
          ipsum aut cumque.
        </p>

        <div className="flex items-center flex-wrap gap-3">
          <img
            src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
            alt=""
            className="w-[220px] object-cover"
          />
          <img
            src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
            alt=""
            className="w-[220px] object-cover"
          />
          <img
            src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
            alt=""
            className="w-[220px] object-cover"
          />
          <img
            src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
            alt=""
            className="w-[220px] object-cover"
          />
        </div>
        <div className="flex items-end gap-5">
          <div className="flex gap-2 ">
            <span>12</span>
            <AiFillLike className="text-[20px] cursor-pointer text-blue-500 " />
          </div>
          <Button
            size="sm"
            className="mt-2 p-2 text-[10px] capitalize font-thin"
          >
            Read more
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
