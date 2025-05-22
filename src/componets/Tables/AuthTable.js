import React from "react";

const AuthTable = () => {
  const authors = [
    {
      name: "Elaine Benes",
      email: "elaine@vandelay.com",
      role: "Manager",
      dept: "Organization",
      status: "Online",
      date: "14/06/21",
      avatar: "/assets/tables/auth1.png",
    },
    {
      name: "Sidra Holland",
      email: "sidra@vandelay.com",
      role: "Programmer",
      dept: "Developer",
      status: "Offline",
      date: "14/06/21",
      avatar: "/assets/tables/auth2.png",
    },
    {
      name: "Cosmo Kramer",
      email: "kramer@vandelay.com",
      role: "Executive",
      dept: "Projects",
      status: "Online",
      date: "14/06/21",
      avatar: "/assets/tables/auth3.png",
    },
    {
      name: "Newman",
      email: "newman@usps.com",
      role: "Manager",
      dept: "Organization",
      status: "Online",
      date: "14/06/21",
      avatar: "/assets/tables/auth4.png",
    },
    {
      name: "Frank Costanza",
      email: "frank@vandelay.com",
      role: "Programmer",
      dept: "Developer",
      status: "Offline",
      date: "14/06/21",
      avatar: "/assets/tables/auth5.png",
    },
    {
      name: "Art VanDelay",
      email: "art.ie@vandelay.com",
      role: "Designer",
      dept: "UI/UX Design",
      status: "Offline",
      date: "14/06/21",
      avatar: "/assets/tables/auth6.png",
    },
  ];
  return (
    <div>
      <div className=" w-full ">
        {/* Authors Table Card */}
        <div className="bg-myWhite w-full rounded-xl shadow p-6 overflow-x-auto">
          <h4 className=" font-[700]  text-second mb-6">Authors Table</h4>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[700px] w-full">
              <thead>
                <tr className="text-left text-[10px] text-lightGray uppercase border-b border-b-[#E2E8F0]">
                  <th className="pb-3">Author</th>
                  <th className="pb-3">Function</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Employed</th>
                  <th className="pb-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {authors.map((author, index) => (
                  <tr
                    key={index}
                    className={`${
                      index !== authors?.length - 1 && "border-b"
                    } border-b-[#E2E8F0] hover:bg-bgGray`}
                  >
                    <td className="py-4 flex items-center gap-4 whitespace-nowrap">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-[40px] h-[40px] rounded-[15px]"
                      />
                      <div>
                        <p className="font-[700] text-second">{author.name}</p>
                        <p className="text-lightGray">{author.email}</p>
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <p className="font-[700] text-second">{author.role}</p>
                      <p className="text-[#718096]">{author.dept}</p>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          author.status === "Online"
                            ? "bg-darkGreen text-myWhite"
                            : "bg-[#CBD5E0] text-myWhite"
                        }`}
                      >
                        {author.status}
                      </span>
                    </td>
                    <td className="py-4 text-[14px] font-[700] whitespace-nowrap">
                      {author.date}
                    </td>
                    <td className="py-4 text-center whitespace-nowrap">
                      <span className="text-[#718096] text-12 font-medium cursor-pointer hover:underline">
                        Edit
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTable;
