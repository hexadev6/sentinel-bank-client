import { Button } from "@material-tailwind/react";
import React from "react";

const AccountCreate = () => {
  return (
    <div>
     
      <Button
        variant="text"
        className="border hover:bg-black hover:text-text-white rounded bg-black text-white"
      >
        Get new card
      </Button>
    </div>
  );
};

export default AccountCreate;
