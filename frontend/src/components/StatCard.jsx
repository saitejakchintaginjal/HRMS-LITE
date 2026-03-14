import { motion } from "framer-motion";

function StatCard({ title, value, icon, tone = "indigo", helper, progress }) {
  const toneStyles = {
    indigo: {
      iconBg: "bg-indigo-50 text-indigo-700",
      bar: "bg-indigo-500",
    },
    purple: {
      iconBg: "bg-purple-50 text-purple-700",
      bar: "bg-purple-500",
    },
    emerald: {
      iconBg: "bg-emerald-50 text-emerald-700",
      bar: "bg-emerald-500",
    },
    rose: {
      iconBg: "bg-rose-50 text-rose-700",
      bar: "bg-rose-500",
    },
  };

  const t = toneStyles[tone] || toneStyles.indigo;

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>

          {helper && <p className="text-sm text-gray-500 mt-2">{helper}</p>}
        </div>

        {icon && (
          <div
            className={`h-11 w-11 rounded-lg flex items-center justify-center ${t.iconBg}`}
          >
            {icon}
          </div>
        )}
      </div>

      {typeof progress === "number" && (
        <div className="mt-5">
          <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className={`h-full ${t.bar}`}
              style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default StatCard;
