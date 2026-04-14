import { useEffect, useState } from "react";
import axios from "axios";
import { Users, UserRound } from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    males: 0,
    females: 0
  });

  const fetchStats = async () => {
    const res = await axios.get("http://localhost:3010/stats");
    setStats(res.data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const data = [
    { name: "Male", value: Number(stats.males) },
    { name: "Female", value: Number(stats.females) },
  ];

  const COLORS = ["#3b82f6", "#ec4899"];

  return (
    <div className="bg-[#f6f8fa]">

      <div className="bg-[#ffffff] p-5 flex gap-4">
        <input type="text" placeholder="Search here" className="bg-[#f6f8fa] max-w-80 p-2 rounded-sm outline-0 border border-[#687685]" />
      </div>
      <div className="p-5">
        <div>
          <h1 className="text-2xl mb-4">Welcome Admin!</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#feeacc] p-4 shadow rounded">
            <h3>Total Students</h3>
            <p className="text-xl">{stats.total}</p>
            <Users size={30} />
          </div>

          <div className="bg-[#c3c3fc] p-4 shadow rounded">
            <h3>Male</h3>
            <p className="text-xl">{stats.males}</p>
            <UserRound size={30} />
          </div>

          <div className="bg-[#c5c2fc] p-4 shadow rounded">
            <h3>Female</h3>
            <p className="text-xl">{stats.females}</p>
            <UserRound size={30} />
          </div>
        </div>
        <div className="bg-white p-6 shadow rounded w-fit flex">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>


          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;