import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  const fetchStats = async () => {
    const res = await axios.get("http://localhost:3010/stats");
    setStats(res.data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3>Total Students</h3>
          <p className="text-xl">{stats.total}</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3>Male</h3>
          <p className="text-xl">{stats.males}</p>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3>Female</h3>
          <p className="text-xl">{stats.females}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;