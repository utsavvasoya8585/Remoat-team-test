import { FaUsers, FaRocket, FaShoppingCart, FaWrench } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
export default function ActiveUsers() {
  const data = [
    { label: "1", value: 320 },
    { label: "2", value: 240 },
    { label: "3", value: 120 },
    { label: "4", value: 300 },
    { label: "5", value: 550 },
    { label: "6", value: 430 },
    { label: "7", value: 500 },
    { label: "8", value: 290 },
    { label: "9", value: 130 },
  ];
  return (
    <div className="bg-myWhite rounded-[15px] w-full shadow-lg overflow-hidden">
      <div
        className="w-full max-w-full xl:h-[260px] lg:h-[180px] h-[200px] rounded-[15px]"
        style={{
          background: "linear-gradient(90deg, #313860 0%, #151928 100%)",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={20}>
            <YAxis
              domain={[-10, 550]}
              ticks={[0, 100, 200, 300, 400, 500]}
              tick={{ fill: "#FFFFFF", fontSize: 14 }}
              axisLine={false}
              tickLine={false}
              width={30}
            />
            <XAxis hide />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "none",
                fontSize: "14px",
                color: "#000",
              }}
              itemStyle={{ color: "#000" }}
            />
            <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={12}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill="#FFFFFF" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-[20px]">
        <h4 className="text-[#2B3674] mb-1">Active Users</h4>

        <p className=" text-darkGreen font-[500] mt-1">
          (+23){" "}
          <span className="text-lightGray text-[500] text-14">
            than last week
          </span>
        </p>

        <div className="grid grid-cols-4 w-full justify-between items-center gap-4 mt-[20px] mb-[10px]">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-md text-myWhite text-lg">
                <FaUsers />
              </div>
              <span className="text-12 text-lightGray">Users</span>
            </div>
            <h4 className="text-second mt-2">32,984</h4>
            <div className="w-full bg-[#E2E8F0] h-[4px] rounded mt-1">
              <div className="bg-primary w-[80%] h-[4px] rounded"></div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-md text-myWhite text-lg">
                <FaRocket />
              </div>
              <span className="text-12 text-lightGray">Clicks</span>
            </div>
            <h4 className="text-second mt-2">2,42m</h4>
            <div className="w-full bg-[#E2E8F0] h-[4px] rounded mt-1">
              <div className="bg-primary w-[75%] h-[4px] rounded"></div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-md text-myWhite text-lg">
                <FaShoppingCart />
              </div>
              <span className="text-12 text-lightGray">Sales</span>
            </div>
            <h4 className="text-second mt-2">2,400$</h4>
            <div className="w-full bg-[#E2E8F0] h-[4px] rounded mt-1">
              <div className="bg-primary w-[60%] h-[4px] rounded"></div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-md text-myWhite text-lg">
                <FaWrench />
              </div>
              <span className="text-12 text-lightGray">Items</span>
            </div>
            <h4 className="text-second mt-2">320</h4>
            <div className="w-full bg-[#E2E8F0] h-[4px] rounded mt-1">
              <div className="bg-primary w-[70%] h-[4px] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
