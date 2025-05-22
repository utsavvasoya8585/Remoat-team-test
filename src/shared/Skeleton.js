import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ActiveUserSkeleton = () => {
  return (
    <div className="w-full h-[300px] bg-lightGray rounded-xl p-4">
      <div className="flex h-full items-end justify-between">
        {/* Fake bars */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton
              height={Math.floor(Math.random() * 200) + 50}
              width={12}
              borderRadius={6}
              baseColor="#2d2d2d"
              highlightColor="#3d3d3d"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const AreaChartSkeleton = () => {
  return (
    <div className="min-w-[600px] lg:min-w-0 h-[300px] bg-[#1A1A1A] rounded-xl p-4">
      <div className="flex h-full items-end gap-[14px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton
            key={index}
            height={Math.floor(Math.random() * 150) + 80}
            width={12}
            borderRadius={8}
            baseColor="#2d2d2d"
            highlightColor="#3d3d3d"
          />
        ))}
      </div>
    </div>
  );
};


export const TableSkeleton = () => {
  const rows = 5; // number of skeleton rows

  return (
    <table className="min-w-[600px] w-full text-left">
      <thead>
        <tr className="text-lightGray text-[10px] uppercase font-[700]">
          <th className="pb-2">Companies</th>
          <th className="pb-2">Members</th>
          <th className="pb-2">Budget</th>
          <th className="pb-2">Completion</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, idx) => (
          <tr key={idx} className="border-t border-[#E2E8F0]">
            <td className="py-[19px] flex items-center gap-2">
              <Skeleton width={20} height={20} circle />
              <Skeleton width={100} height={14} />
            </td>
            <td className="py-[19px]">
              <div className="flex -space-x-2">
                {Array.from({ length: 3 }).map((__, i) => (
                  <Skeleton
                    key={i}
                    width={20}
                    height={20}
                    circle
                    style={{ marginLeft: i !== 0 ? -8 : 0 }}
                  />
                ))}
              </div>
            </td>
            <td className="py-[19px]">
              <Skeleton width={60} height={14} />
            </td>
            <td className="py-[19px]">
              <Skeleton width={40} height={14} />
              <Skeleton
                height={3}
                width={`90%`}
                style={{ marginTop: 4, borderRadius: 999 }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



