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
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import auth from "../features/app/firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  // useSignOut,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

export default function Register() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;

    await createUserWithEmailAndPassword(email.value, password.value);
    await updateProfile({ displayName: name.value });
    e.target.reset();
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
  if (error || gError) {
    errorMsg = (
      <p className="text-red-500 font-semibold capitalize">
        {error?.message || gError?.message}
      </p>
    );
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
        <CardBody>
          {errorMsg}
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <Input label="Name" size="lg" type="text" name="name" required />
            <Input label="Email" size="lg" type="email" name="email" required />
            <Input
              label="Password"
              size="lg"
              name="password"
              type="password"
              required
            />

            <Button
              variant="gradient"
              type="submit"
              fullWidth
              className="grid place-items-center"
            >
              {loading || updating ? <Spinner className="w-4" /> : "Sign Up"}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
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
