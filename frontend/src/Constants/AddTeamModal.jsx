import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";

const teamMembers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Dana" },
];

export default function AddTeamModal({ open, setOpen }) {
  const [teamName, setTeamName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [memberToAdd, setMemberToAdd] = useState("");

  const handleAddMember = () => {
    if (memberToAdd && !selectedMembers.includes(memberToAdd)) {
      setSelectedMembers([...selectedMembers, memberToAdd]);
      setMemberToAdd("");
    }
  };
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                      <h2 className="text-2xl text-gray-900 font-bold mb-4">
                        Add New Team
                      </h2>
                      <form>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="teamName"
                          >
                            Team Name
                          </label>
                          <input
                            type="text"
                            id="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 focus:border-gray-600 duration-300"
                            placeholder="Enter team name"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="teamMembers"
                          >
                            Add Team Member
                          </label>
                          <div className="flex">
                            <select
                              id="teamMembers"
                              value={memberToAdd}
                              onChange={(e) => setMemberToAdd(e.target.value)}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 focus:border-gray-600 duration-300"
                            >
                              <option value="">Select a member</option>
                              {teamMembers.map((member) => (
                                <option key={member.id} value={member.name}>
                                  {member.name}
                                </option>
                              ))}
                            </select>
                            <button
                              type="button"
                              onClick={handleAddMember}
                              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-between gap-3"
                            >
                              <IoPersonAddSharp />
                              Add
                            </button>
                          </div>
                        </div>
                      </form>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Team Members</h3>
                        <div className="flex-col justify-start items-center">
                        {selectedMembers.map((member, index) => (
                          <div className="flex items-center justify-start">
                            <BsPersonFill color="gray" size={25} />
                            <p key={index} className="text-gray-700">
                              {member}
                            </p>
                          </div>
                        ))}
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={() => setOpen(false)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
