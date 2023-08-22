import { Drawer, IconButton } from "@material-tailwind/react";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const MblMenu = ({ state, setState }) => {
  return (
    <Drawer open={state} onClose={() => setState(false)}>
      <div className="w-11/12 mx-auto mt-3 ">
        <div className=" flex justify-between items-center mb-8">
          <p>
            <Link to="/" className="text-xl font-bold text-blue-500">
              Just Post It
            </Link>
          </p>

          <IconButton
            className="text-xl"
            variant="text"
            onClick={() => setState(false)}
          >
            <AiOutlineCloseCircle />
          </IconButton>
        </div>
        <ul className=" items-center justify-end gap-5 ">
          <li>
            <Link
              to="/"
              className="text-base border-b block pb-1 mt-3 hover:text-blue-600 duration-300"
              onClick={() => setState(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className="text-base border-b block pb-1 mt-3 hover:text-blue-600 duration-300"
              onClick={() => setState(false)}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-base border-b block pb-1 mt-3 hover:text-blue-600 duration-300"
              onClick={() => setState(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </Drawer>
  );
};

export default MblMenu;
