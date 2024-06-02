import { FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-toastify";

const people = [
    {
        id: "001",
        name: "Lindsay Walton",
        requestedTeam: "Front-end Team",
      },
      {
        id: "002",
        name: "Cameron Williamson",
        requestedTeam: "Back-end Team",
      },
      {
        id: "003",
        name: "Courtney Henry",
        requestedTeam: "Design Team",
      },
      {
        id: "004",
        name: "Tom Cook",
        requestedTeam: "Marketing Team",
      },
      {
        id: "005",
        name: "Whitney Francis",
        requestedTeam: "Sales Team",
      },
  ];
  

export default function RequestsTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto mt-9">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Joining Requests
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Joining Requests to Teams.
          </p>
        </div>
        
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Employee ID
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Employee Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                 Requested Team
              </th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {person.id}
                  <dl className="font-normal lg:hidden">
                    <dd className="mt-1 truncate text-gray-700">{person.name}</dd>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.requestedTeam}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {person.name}
                </td>
                <td className="hidden px-3 pr-20 py-4 text-sm text-gray-500 sm:table-cell">
                  {person.requestedTeam}
                </td>
              
                <td className="whitespace-nowrap py-4 pl-3 pr-5 text-right text-sm font-medium flex justify-end">
                  <div className="flex items-center gap-5">
                    <div className="hover:cursor-pointer bg-green-200 p-1 rounded-lg hover:scale-105 duration-200" onClick={()=> toast.success('Accepted')}>
                      <FaCheck color="green" size={20} />
                    </div>
                    <div className="hover:cursor-pointer bg-red-200 p-0.5 rounded-lg hover:scale-105 duration-200" onClick={()=> toast.error('Denied')}>
                      <MdOutlineCancel color="red" size={25} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
