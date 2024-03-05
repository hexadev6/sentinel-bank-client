import React from "react";
import Transaction from "../Overview/Transaction/Transaction";
import useAllAccounts from "../../../Hooks/useAllAccounts";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import { BsBank2 } from "react-icons/bs";

const TransactionPDF = ({ pdfContentRef }) => {
  const [allAcounts] = useAllAccounts();

  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

  return (
    <div id="pdf-content" ref={pdfContentRef}>
      <div className=" p-10 bg-nevy-blue flex justify-between">
        <div className="text-white">
          <BsBank2 className="text-9xl  text-white" />
          <div className="flex flex-col mt-2">
            <h2 className="font-bold text-2xl ">Sentinel</h2>
            <h4 className="font-medium tracking-widest text-xl -mt-2 ">
              Trust Bank
            </h4>
          </div>
          <div>
            <p>Mirpur 2, Dhaka, Bangladesh</p>
            <p>steady-licorice-18c217.netlify.app</p>
          </div>
        </div>

        <div className="text-white">
          <div className="mb-4 flex items-end flex-col ">
            <h1 className="font-medium uppercase  text-lg">Bank Information</h1>
            <h1>Account No: {userinfo?.acc_num}</h1>
            {allAcounts?.map((account, i) => (
              <>
                {account?.acc_num === userinfo?.acc_num && (
                  <>
                    <h1 className="capitalize" key={i}>
                      {account?.type} account
                    </h1>
                  </>
                )}
              </>
            ))}
          </div>
          <div className="flex items-end flex-col">
            <h1 className="font-medium uppercase text-lg">
              Client Information
            </h1>
            <h1 className="capitalize">{userinfo?.name}</h1>
            {allAcounts?.map((account, i) => (
              <>
                {account?.acc_num === userinfo?.acc_num && (
                  <div key={i}>
                    <h1 className="capitalize">{account?.address}</h1>
                    <h1>+{account?.phnNumber}</h1>
                    <h1>{account?.holderEmail}</h1>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className=" p-10">
        <Transaction />
      </div>
    </div>
  );
};

export default TransactionPDF;
