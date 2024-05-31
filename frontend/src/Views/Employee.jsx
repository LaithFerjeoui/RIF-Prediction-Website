import React, { useState } from 'react';

const Employee = () => {
  const [formData, setFormData] = useState({
    id: '',
    jobLevel: '',
    totalYearsInCompany: '',
    totalYearsInDomain: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8 max-w-md">
       <div className='flex justify-center '>
      <p className="text-center text-3xl my-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-blue-800 border-b border-gray-900 w-fit">
      Edit Employee Details
        </p>
    </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobLevel" className="block text-sm font-medium text-gray-700">
            Job Level
          </label>
          <input
            type="text"
            id="jobLevel"
            name="jobLevel"
            value={formData.jobLevel}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalYearsInCompany" className="block text-sm font-medium text-gray-700">
            Total Working Years in Company
          </label>
          <input
            type="text"
            id="totalYearsInCompany"
            name="totalYearsInCompany"
            value={formData.totalYearsInCompany}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalYearsInDomain" className="block text-sm font-medium text-gray-700">
            Total Working Years in Domain
          </label>
          <input
            type="text"
            id="totalYearsInDomain"
            name="totalYearsInDomain"
            value={formData.totalYearsInDomain}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Employee;
