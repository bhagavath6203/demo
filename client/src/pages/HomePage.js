import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/shared/Layout/Layout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; 


const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  const [analyticsData, setAnalyticsData] = useState([]);

  // Example function to fetch analytics data
  const fetchAnalyticsData = async () => {
    // Replace this with your actual API call to fetch analytics data
    // For demo purposes, let's use dummy data
    const dummyData = [
      { name: 'January', value: 100 },
      { name: 'February', value: 200 },
      { name: 'March', value: 300 },
      { name: 'April', value: 400 },
      { name: 'May', value: 500 },
      { name: 'June', value: 600 },
    ];
    setAnalyticsData(dummyData);
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  return (
    <Layout>
      {user && (
        <div className="container sunrise-bg d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="text-center">
            <h1>Welcome, {user.name}</h1>
            <h2>Analytics Dashboard</h2>
            <div>
              <h3>Example Analytics</h3>
              <BarChart width={600} height={300} data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
