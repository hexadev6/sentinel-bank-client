import React from "react";

const History = ({ transactionHistory }) => {
  return (
    <>
      <div className=" shadow rounded  pt-0 h-96 overflow-auto">
      <h1 className="py-3 font-medium  text-white text-center bg-nevy-blue sticky top-0">History</h1>
        <div className="p-2">
        {transactionHistory.length === 0 ? (
          <p class="text-sm text-center py-2 ">You don't have any history</p>
        ) : (
          transactionHistory?.map((transaction, index) => (
            <div
              key={index}
              className="flex w-full  justify-between bg-white py-2 px-3 shadow mb-2 rounded "
            >
              {transaction?.type === "deposit" ? (
                <>
                  <p class="text-sm">You have {transaction?.type} </p>
                  <h1 class="text-green-400 text-sm">
                    +<span>{transaction.amount}</span>
                  </h1>
                </>
              ) : (
                <>
                  <p class="text-sm">You have {transaction?.type}</p>
                  <h1 class="text-red-500 text-sm">
                    -<span>{transaction.amount}</span>
                  </h1>
                </>
              )}
            </div>
          ))
        )}
        </div>
      </div>
    </>
  );
};

export default History;
