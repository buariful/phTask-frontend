import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Register() {
  return (
    <>
      <div className="text-center mt-10">
        {" "}
        <Button
          variant="outlined"
          className="w-56 mx-auto flex justify-center items-center gap-2"
        >
          <AiOutlineGoogle />
          <span>sign up with google</span>
        </Button>
      </div>
      <Card className="w-96 mx-auto my-14">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" type="email" name="email" />
          <Input label="Password" size="lg" name="password" type="password" />
          <Input
            label="Confirm Password"
            size="lg"
            name="confirm password"
            type="password"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            <span className="mr-1">Already have an account?</span>
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}
