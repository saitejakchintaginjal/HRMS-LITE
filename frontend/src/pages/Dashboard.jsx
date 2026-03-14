import { useMemo } from "react";
import { useGetEmployeesQuery } from "../services/employeeApi";
import { useGetAttendanceQuery } from "../services/attendanceApi";
import { motion } from "framer-motion";
import {
  Loader2,
  Users,
  ClipboardList,
  UserCheck,
  Percent,
  CalendarDays,
} from "lucide-react";
import StatCard from "../components/StatCard";

function Dashboard() {
  const { data: employees, isLoading: employeesLoading } =
    useGetEmployeesQuery();
  const { data: attendanceRecords, isLoading: attendanceLoading } =
    useGetAttendanceQuery();
  const today = new Date().toISOString().split("T")[0];
  const totalEmployees = employees?.length || 0;
  const employeeMap = useMemo(() => {
    const map = {};
    employees?.forEach((emp) => {
      map[emp.id] = emp.name;
    });
    return map;
  }, [employees]);
  const validAttendance = useMemo(() => {
    if (!attendanceRecords || !employees) return [];
    const employeeIds = new Set(employees.map((e) => e.id));
    return attendanceRecords.filter((rec) => employeeIds.has(rec.employee_id));
  }, [attendanceRecords, employees]);
  const todaysAttendance = useMemo(() => {
    return validAttendance.filter((rec) => rec.date === today);
  }, [validAttendance, today]);
  const totalAttendanceToday = todaysAttendance.length;
  const presentCountToday = todaysAttendance.filter(
    (rec) => rec.status === "Present",
  ).length;
  const attendanceRateToday =
    totalAttendanceToday > 0
      ? ((presentCountToday / totalAttendanceToday) * 100).toFixed(1)
      : "0.0";
  const recentAttendance = useMemo(() => {
    return validAttendance.slice(-8).reverse();
  }, [validAttendance]);
  const isLoading = employeesLoading || attendanceLoading;
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 md:p-10 animate-fadeInUp">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-500 mt-1 text-sm">
                Summary of employees and today’s attendance.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-gray-50 px-4 py-2 text-gray-700">
              <CalendarDays size={18} className="text-indigo-600" />
              <span className="text-sm font-medium">{today}</span>
            </div>
          </div>
        </div>
        {isLoading && (
          <div className="flex justify-center py-14">
            <div className="flex items-center gap-3 text-gray-600">
              <Loader2 className="animate-spin" />
              <span className="text-sm">Loading dashboard...</span>
            </div>
          </div>
        )}
        {/* Stat Cards */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Employees"
              value={totalEmployees}
              icon={<Users size={18} />}
              tone="indigo"
            />
            <StatCard
              title="Today's Records"
              value={totalAttendanceToday}
              icon={<ClipboardList size={18} />}
              tone="purple"
            />
            <StatCard
              title="Today's Present"
              value={presentCountToday}
              icon={<UserCheck size={18} />}
              tone="emerald"
            />
            <StatCard
              title="Attendance Rate"
              value={`${attendanceRateToday}%`}
              icon={<Percent size={18} />}
              tone="rose"
              progress={Number(attendanceRateToday)}
            />
          </div>
        )}
        {/* Recent Attendance */}{" "}
        {!isLoading && (
          <div className="bg-white rounded-2xl shadow border overflow-hidden">
            <div className="p-6 border-b flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Recent Attendance
                </h2>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                Showing {Math.min(recentAttendance.length, 8)}
              </span>
            </div>
            {recentAttendance.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                No attendance records available.
              </div>
            )}
            {recentAttendance.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-600 uppercase">
                    <tr>
                      <th className="px-6 py-4">Employee</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentAttendance.map((rec) => {
                      const isPresent = rec.status === "Present";
                      return (
                        <tr
                          key={rec.id}
                          className="hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-4 font-medium text-gray-800">
                            {employeeMap[rec.employee_id] || "Unknown"}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {rec.date}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${isPresent ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}
                            >
                              {rec.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Dashboard;
