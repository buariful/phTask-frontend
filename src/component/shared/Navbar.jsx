import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../features/app/firebase.init";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

const Navbar = ({ setState }) => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  if (user) {
    dispatch(setUser({ data: user }));
  }
  return (
    <div className="sticky top-0 left-0 py-6 shadow-md z-50 bg-white">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold text-blue-500">
            Just Post It
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex items-center justify-end gap-5 ">
            <li>
              <Link
                to="/"
                className="text-sm font-semibold hover:text-blue-600 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/media"
                className="text-sm font-semibold hover:text-blue-600 duration-300"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm font-semibold hover:text-blue-600 duration-300"
              >
                About
              </Link>
            </li>
          </ul>
          <IconButton
            variant="text"
            className="block md:hidden text-md"
            onClick={() => setState(true)}
          >
            <AiOutlineMenu />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
