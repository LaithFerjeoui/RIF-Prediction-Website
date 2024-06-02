import React from "react";
import RequestsTable from "../Components/RequestsTable";

const Requests = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center mt-10">
        <p className="text-center text-3xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-blue-800 border-b border-gray-900 w-fit">
          Joining Requests
        </p>
      </div>
      <RequestsTable/>
    </div>
  );
};

export default Requests;
