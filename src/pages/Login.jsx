import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import auth from "../features/app/firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    signInWithEmailAndPassword(email.value, password.value);
  };
  if (user) {
    dispatch(setUser({ data: { ...user?.user } }));
    navigate("/");
  }
  if (gUser) {
    dispatch(setUser({ data: { ...gUser?.user } }));
    navigate("/");
  }

  let errorMsg;
  if (gError) {
    errorMsg = <p className="text-red-500">{gError.message}</p>;
  }
  if (error) {
    errorMsg = <p className="text-red-500">{error.message}</p>;
  }
  return (
    <>
      <div className="text-center mt-10">
        {" "}
        <Button
          variant="outlined"
          className="w-56 mx-auto flex justify-center items-center gap-2"
          onClick={() => signInWithGoogle()}
        >
          {gLoading ? (
            <Spinner className="w-4" />
          ) : (
            <>
              {" "}
              <AiOutlineGoogle />
              <span>sign up with google</span>
            </>
          )}
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
          {errorMsg}
          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <Input label="Email" name="email" type="email" />
            </div>
            <div className="mb-5">
              <Input label="Password" name="password" type="password" />
            </div>
            <Button
              variant="gradient"
              type="submit"
              fullWidth
              className="grid place-items-center"
            >
              {loading ? <Spinner className="w-4" /> : "Sign In"}
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
