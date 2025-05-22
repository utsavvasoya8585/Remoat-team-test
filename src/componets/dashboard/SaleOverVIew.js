import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  { name: "Jan", sales2021: 200, sales2020: 500 },
  { name: "Feb", sales2021: 210, sales2020: 150 },
  { name: "Mar", sales2021: 220, sales2020: 200 },
  { name: "Apr", sales2021: 320, sales2020: 280 },
  { name: "May", sales2021: 330, sales2020: 240 },
  { name: "Jun", sales2021: 460, sales2020: 230 },
  { name: "Jul", sales2021: 410, sales2020: 270 },
  { name: "Aug", sales2021: 300, sales2020: 230 },
  { name: "Sep", sales2021: 350, sales2020: 150 },
  { name: "Oct", sales2021: 230, sales2020: 180 },
  { name: "Nov", sales2021: 420, sales2020: 200 },
  { name: "Dec", sales2021: 440, sales2020: 160 },
];

export default function SalesOverview() {
  return (
    <div className="w-full h-[400px] bg-white rounded-2xl shadow-md p-2">
      <h4 className=" font-[700] text-second">Sales overview</h4>
      <p className=" text-darkGreen font-[500] mt-1">
        (+5) more{" "}
        <span className="text-lightGray text-[500] text-14">in 2021</span>
      </p>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] lg:min-w-0 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="color2021" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="color2020" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2D3748" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E0E6F5"
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "#CBD5E1", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#CBD5E1", fontSize: 12 }}
                domain={[0, 500]}
                axisLine={false}
                tickLine={false}
                ticks={[0, 100, 200, 300, 400, 500]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  border: "none",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.05)",
                }}
              />
              <Area
                type="monotone"
                dataKey="sales2021"
                stroke="#4FD1C5"
                fillOpacity={1}
                fill="url(#color2021)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="sales2020"
                stroke="#2D3748"
                fillOpacity={1}
                fill="url(#color2020)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
