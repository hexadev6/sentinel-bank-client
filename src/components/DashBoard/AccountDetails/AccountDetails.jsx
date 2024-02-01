import React from "react";
import useSingleAccount from "../../../Hooks/useSingleAccount";
import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";

const AccountDetails = ({ id }) => {
  const [account, isLoading, refetch] = useSingleAccount(id);
  if (isLoading)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Spinner color='blue' />
      </div>
    );

  console.log(account);
  return <div>{account.holderName}</div>;
};

export default AccountDetails;

AccountDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
