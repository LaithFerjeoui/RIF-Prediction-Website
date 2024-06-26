import React, { useState } from "react";
import AddTeamModal from "../Components/AddTeamModal";
import { toast } from "react-toastify";

const Admin = () => {
  const [teams, setTeams] = useState([
    { name: "Team Alpha", employees: ["Alice", "Bob", "Charlie"] },
    { name: "Team Beta", employees: ["David", "Eve", "Frank"] },
    { name: "Team Gamma", employees: ["Grace", "Heidi", "Ivan"] },
    { name: "Team Delta", employees: ["Jack", "Karen", "Leo"] },
    { name: "Team Epsilon", employees: ["Mona", "Nina", "Oscar"] },
    { name: "Team Zeta", employees: ["Paul", "Quinn", "Rachel"] },
    { name: "Team Eta", employees: ["Sam", "Tina", "Uma"] },
    { name: "Team Theta", employees: ["Vince", "Wendy", "Xander"] },
    { name: "Team Iota", employees: ["Yara", "Zane", "Aaron"] },
  ]);

  const handleTeamNameChange = (index, newName) => {
    const updatedTeams = teams.map((team, i) =>
      i === index ? { ...team, name: newName } : team
    );
    setTeams(updatedTeams);
  };

  const handleAddTeam = () => {
    setTeams([...teams, { name: "New Team", employees: [] }]);
    setOpen(false);
    toast.success("Team added successfully");
  };

  const handleRemoveTeam = (index) => {
    const updatedTeams = teams.filter((_, i) => i !== index);
    setTeams(updatedTeams);
  };

  const handleAddEmployee = (teamIndex, newEmployee) => {
    const updatedTeams = teams.map((team, i) =>
      i === teamIndex
        ? { ...team, employees: [...team.employees, newEmployee] }
        : team
    );
    setTeams(updatedTeams);
  };

  const handleRemoveEmployee = (teamIndex, employeeIndex) => {
    const updatedTeams = teams.map((team, i) =>
      i === teamIndex
        ? {
            ...team,
            employees: team.employees.filter((_, j) => j !== employeeIndex),
          }
        : team
    );
    setTeams(updatedTeams);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center ">
        <p className="text-center text-3xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-blue-800 border-b border-gray-900 w-fit">
          Admin Panel
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                value={team.name}
                onChange={(e) =>
                  handleTeamNameChange(teamIndex, e.target.value)
                }
                className="text-xl font-bold border-b-2 border-gray-300 focus:border-blue-500 outline-none"
              />
              <button
                onClick={() => handleRemoveTeam(teamIndex)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove Team
              </button>
            </div>
            <ul className="list-disc list-inside mb-4">
              {team.employees.map((employee, employeeIndex) => (
                <li
                  key={employeeIndex}
                  className="flex justify-between items-center text-gray-700"
                >
                  {employee}
                  <button
                    onClick={() =>
                      handleRemoveEmployee(teamIndex, employeeIndex)
                    }
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const newEmployee = prompt("Enter new employee name:");
                if (newEmployee) handleAddEmployee(teamIndex, newEmployee);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Add Employee
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={setOpen}
          className="mb-5 mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Team
        </button>
      </div>
      <AddTeamModal open={open} setOpen={handleAddTeam} />
    </div>
  );
};

export default Admin;
