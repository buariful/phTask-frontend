import {
  Button,
  Card,
  CardBody,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddPost = () => {
  const [selectectedImg, setSelectedImages] = useState([]);

  const handleImageSelect = (event) => {
    const files = Array.from(event.target.files);
    const selectedImagesArray = files.map((file) => ({
      file,
      previewURL: URL.createObjectURL(file),
    }));
    setSelectedImages([...selectectedImg, ...selectedImagesArray]);
  };

  const handleImageDelete = (index) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedImages = [...prevSelectedImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };
  return (
    <>
      <div className=" mt-10 mb-14">
        <div className="text-center font-bold text-xl">
          <Typography variant="h2" className="inline-block mb-3">
            Write A Post
          </Typography>
        </div>

        <Card className="max-w-xl mx-auto border border-blue-gray-50">
          <CardBody>
            <form>
              <div
                className={` justify-center items-center gap-5 my-10  ${
                  selectectedImg.length > 0 ? "flex" : "hidden"
                }`}
              >
                {selectectedImg.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[115px] w-[130px] bg-[#eee] rounded grid place-items-center"
                  >
                    <img
                      src={image?.previewURL}
                      alt={`Preview ${index}`}
                      className="max-h-[115px]"
                    />
                    <span
                      className="inline-block p-1 absolute top-0 right-0 bg-red-50 hover:bg-red-200 text-black rounded cursor-pointer text-sm"
                      onClick={() => handleImageDelete(index)}
                    >
                      <AiOutlineClose />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="formFileSm"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Choose Images
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                  id="formFileSm"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageSelect}
                />
              </div>

              <Textarea label="Write something" name="postTxt" />
              <div className="text-center">
                {" "}
                <Button color="blue">Post</Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AddPost;
