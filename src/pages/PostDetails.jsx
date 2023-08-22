import { IconButton } from "@material-tailwind/react";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

const PostDetails = () => {
  return (
    <div className="w-11/12 md:10/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mb-10">
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
          alt=""
          className="w-[400px] object-cover"
        />
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
          alt=""
          className="w-[400px] object-cover"
        />
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
          alt=""
          className="w-[400px] object-cover"
        />
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
          alt=""
          className="w-[400px] object-cover"
        />
      </div>

      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        nihil maiores dolorum quam architecto, ipsa atque eaque quasi facere
        totam corporis fugit! Assumenda, exercitationem enim officiis libero
        maxime fugiat alias culpa laborum explicabo ullam nihil ut nemo
        perferendis nesciunt architecto aspernatur accusantium, dignissimos
        debitis qui temporibus mollitia beatae ex accusamus. Ut similique odit
        facere facilis assumenda quia qui reprehenderit autem culpa nobis.
        Perferendis magnam deserunt reiciendis veniam tenetur asperiores quasi
        tempora, eligendi voluptates consequatur. Quidem excepturi praesentium
        nemo quisquam iusto, minus animi sed. Reiciendis iusto asperiores vero,
        nemo doloribus earum magni quam deserunt architecto sint incidunt quae
        minima at sapiente!
      </p>

      <div className="mb-5 flex items-end gap-4 py-5 border-b border-t">
        <div className="flex gap-2 ">
          <span>12</span>
          <AiFillLike className="text-[20px] cursor-pointer text-blue-500 " />
        </div>

        <form className="flex items-end gap-2">
          <textarea
            name="comment"
            placeholder="Write your comment..."
            cols={55}
            className="border border-gray-500 p-3 focus:border-black"
          />
          <IconButton variant="text" size="md" className="text-[20px]">
            <BiLogoTelegram />
          </IconButton>
        </form>
      </div>

      <div className="flex gap-5 mb-2">
        <div>
          <img
            src={require("../images/profile.png")}
            alt=""
            className="w-[50px]"
          />
          <p>Name</p>
        </div>

        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas
          dolorum animi est consectetur earum, reiciendis, facere blanditiis
          cupiditate sed quia maxime modi at harum?
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
