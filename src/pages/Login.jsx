import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="text-center mt-10">
        {" "}
        <Button
          variant="outlined"
          className="w-52 mx-auto flex justify-center items-center gap-2"
        >
          <AiOutlineGoogle />
          <span>sign in with google</span>
        </Button>
      </div>

      <Card className="w-96 mx-auto mt-10 mb-14">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form>
            <div className="mb-2">
              <Input label="Email" name="email" type="email" />
            </div>
            <div className="mb-5">
              <Input label="Password" name="email" type="password" />
            </div>
            <Button variant="gradient" type="submit" fullWidth>
              Sign In
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            <span className="mr-1"> Don&apos;t have an account?</span>
            <Link to="/register" className="font-semibold">
              Sign up
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}
