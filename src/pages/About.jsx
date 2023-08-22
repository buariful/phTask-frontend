import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="w-[700px] h-[86vh] mx-auto text-center grid place-items-center">
        <div>
          <Typography variant="h4" className="mb-3">
            Profile
          </Typography>
          <div className=" flex justify-centr gap-5 items-center ">
            <img src={require("../images/profile.png")} alt="" />
            <div className="text-start">
              <p>Email: abc@gmail.com</p>
              <p className="mb-5">Password: psf25dfs</p>
              <Button onClick={() => setModalOpen(true)}>Edit</Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={modalOpen} size="xs">
        <DialogHeader className="flex justify-between items-center">
          <span>Update your profile.</span>{" "}
          <IconButton variant="text" onClick={() => setModalOpen(false)}>
            <AiOutlineClose />
          </IconButton>
        </DialogHeader>
        <DialogBody divider>
          <form>
            <div className="flex justify-center flex-col gap-4">
              <Input type="email" name="email" label="email" required />
              <Input
                type="password"
                name="password"
                label="password"
                required
              />
              <Input
                type="password"
                name="confirm_password"
                label="confirm_password"
                required
              />
              <Button type="submit">Update</Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default About;
