import React from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  return (
    <Card className="post_container">
      <CardBody>
        <div className="flex items-center gap-3 mb-3">
          <img src={data?.user?.avatar} alt="" className="w-8 rounded-full" />
          <b className="text-sm capitalize">{data?.user?.name}</b>
        </div>

        <p className="post_text">{data?.text}</p>

        <div className="flex items-center flex-wrap gap-3">
          {data?.images?.map((img) => (
            <img
              src={img?.url}
              alt=""
              className="w-[220px] object-cover"
              key={img?.public_id}
            />
          ))}
        </div>
        <Link to={`/media/${data?._id}`}>
          <Button className="mt-2 capitalize font-thin">Details</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Post;
