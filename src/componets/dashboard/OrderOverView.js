import { FaBell, FaHtml5, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { SiAdobexd, SiDropbox } from "react-icons/si";

const orders = [
  {
    icon: <FaBell className="text-primary" />,
    text: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
  },
  {
    icon: <FaHtml5 className="text-[#ff5733]" />,
    text: "New order #4219423",
    date: "21 DEC 11:21 PM",
  },
  {
    icon: <FaShoppingCart className="text-[#4299E1]" />,
    text: " Server Payments for April",
    date: "21 DEC 9:28 PM",
  },
  {
    icon: <FaCreditCard className="text-[#F6AD55]" />,
    text: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
  },
  {
    icon: <SiDropbox className="text-[#9F7AEA]" />,
    text: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
  },
  {
    icon: <SiAdobexd className="text-[#470137] bg-[#FF61F6] rounded-[3px]" />,
    text: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];

const OrdersOverview = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-md w-full h-full ">
      <h4 className=" text-second">Orders overview</h4>
      <p className=" text-darkGreen font-[500] mt-1">
        +30%{" "}
        <span className="text-lightGray text-[400] text-14">this month</span>
      </p>

      <div className="mt-6 space-y-[20px] relative">
        {orders.map((order, index) => (
          <div key={index} className="relative pl-10">
            <div
              className={`absolute left-3 top-3  mt-4 bottom-0 w-[2px] ${
                index !== orders.length - 1 ? "h-[75%]" : "h-[20px]"
              }  bg-[#E2E8F0]`}
            ></div>

            {/* Icon */}
            <div className="absolute left-0 top-0 w-6 h-6 bg-white flex items-center justify-center">
              {order.icon}
            </div>

            {/* Content */}
            <div>
              <p className=" font-semibold text-second ">{order.text}</p>
              <span className="text-12 text-lightGray mt-1">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersOverview;
