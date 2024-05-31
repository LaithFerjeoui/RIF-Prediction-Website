import React, { useState } from "react";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    jobLevel: "",
    totalYearsInCompany: "",
    totalWorkingTime: "",
    projectComplexity: "1", // Default value
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <div className="bg-gray-300 h-screen pt-36">
      <div className="container mx-auto  ">
        <p className="flex justify-center text-center text-3xl pb-24 leading-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-900 to-blue-800">
          Estimation de Temps Nécessaire <br/> pour Travailler sur un Projet{" "}
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobLevel"
              className="block text-sm font-medium text-gray-700"
            >
              Job Level
            </label>
            <input
              type="text"
              id="jobLevel"
              name="jobLevel"
              value={formData.jobLevel}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="totalYearsInCompany"
              className="block text-sm font-medium text-gray-700"
            >
              Total Years in Company
            </label>
            <input
              type="text"
              id="totalYearsInCompany"
              name="totalYearsInCompany"
              value={formData.totalYearsInCompany}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="totalWorkingTime"
              className="block text-sm font-medium text-gray-700"
            >
              Total Working Time (years)
            </label>
            <input
              type="text"
              id="totalWorkingTime"
              name="totalWorkingTime"
              value={formData.totalWorkingTime}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectComplexity"
              className="block text-sm font-medium text-gray-700"
            >
              Project Complexity
            </label>
            <select
              id="projectComplexity"
              name="projectComplexity"
              value={formData.projectComplexity}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-400 rounded-md w-full"
            >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Predict
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default LandingPage;
