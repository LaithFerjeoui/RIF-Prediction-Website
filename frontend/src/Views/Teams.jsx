import React from "react";
import { Link } from "react-router-dom";

const teamsData = [
  {
    name: "Team Alpha",
    employees: ["Alice", "Bob", "Charlie"],
  },
  {
    name: "Team Beta",
    employees: ["David", "Eve", "Frank"],
  },
  {
    name: "Team Gamma",
    employees: ["Grace", "Heidi", "Ivan"],
  },
  {
    name: "Team Delta",
    employees: ["Jack", "Karen", "Leo"],
  },
  {
    name: "Team Epsilon",
    employees: ["Mona", "Nina", "Oscar"],
  },
  {
    name: "Team Zeta",
    employees: ["Paul", "Quinn", "Rachel"],
  },
  {
    name: "Team Eta",
    employees: ["Sam", "Tina", "Uma"],
  },
  {
    name: "Team Theta",
    employees: ["Vince", "Wendy", "Xander"],
  },
  {
    name: "Team Iota",
    employees: ["Yara", "Zane", "Aaron"],
  },
];

const Teams = () => {
  return (
    <>
      <div className="flex justify-center ">
        <p className="text-center text-3xl my-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-blue-800 border-b border-gray-900 w-fit">
          Available Teams
        </p>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamsData.map((team, index) => (
          <div
            key={index}
            className="bg-gray-300 shadow-md rounded-lg p-6 border-2 border-gray-400 hover:scale-105 duration-200"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-4">{team.name}</h2>
              <Link to={'/joinTeam'}>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
               
              >
                Request to Join
              </button>
              </Link>
              
            </div>
            <ul className="list-disc list-inside">
              {team.employees.map((employee, idx) => (
                <li key={idx} className="text-gray-700">
                  {employee}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Teams;
