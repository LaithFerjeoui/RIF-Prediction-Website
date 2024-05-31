import React from 'react';

const teamsData = [
  {
    name: "Team Alpha",
    employees: ["Alice", "Bob", "Charlie"]
  },
  {
    name: "Team Beta",
    employees: ["David", "Eve", "Frank"]
  },
  {
    name: "Team Gamma",
    employees: ["Grace", "Heidi", "Ivan"]
  },
  {
    name: "Team Delta",
    employees: ["Jack", "Karen", "Leo"]
  },
  {
    name: "Team Epsilon",
    employees: ["Mona", "Nina", "Oscar"]
  },
  {
    name: "Team Zeta",
    employees: ["Paul", "Quinn", "Rachel"]
  },
  {
    name: "Team Eta",
    employees: ["Sam", "Tina", "Uma"]
  },
  {
    name: "Team Theta",
    employees: ["Vince", "Wendy", "Xander"]
  },
  {
    name: "Team Iota",
    employees: ["Yara", "Zane", "Aaron"]
  }
];

const Teams = () => {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamsData.map((team, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">{team.name}</h2>
          <ul className="list-disc list-inside">
            {team.employees.map((employee, idx) => (
              <li key={idx} className="text-gray-700">{employee}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Teams;
