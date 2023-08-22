import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const TopPosts = () => {
  return (
    <div className="mb-14">
      <div className="text-center font-bold text-xl">
        <Typography variant="h2" className="inline-block mb-3">
          Top Posts
        </Typography>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        <Card className="mt-6 max-w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
              className="object-cover h-[100%] w-[100%]"
            />
          </CardHeader>
          <CardBody>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TopPosts;
