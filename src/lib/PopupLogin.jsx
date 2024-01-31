import { useState, useEffect } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
const PopupLogin = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className="modal rounded-md overflow-hidden bg-white  fixed z-50 top-10 right-10  transition-all">
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4 relative">
              <span
                className="close absolute top-2 right-5 text-2xl cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </span>
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Sign In.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input label="Email" size="lg" />
              <Typography className="-mb-2" variant="h6">
                Your Password
              </Typography>
              <Input label="Password" size="lg" />
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default PopupLogin;
