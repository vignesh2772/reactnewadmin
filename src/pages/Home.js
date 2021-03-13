import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Home = () => {
  const data = [
    { name: "Credit Card", users: 500000000 },
    { name: "Debit Card", users: 1000000000 },
    { name: "UPI", users: 1500000000 },
    { name: "Bank Transfer", users: 500000000 },
  ];

  return (
    <div style={{ textAlign: "center", padding:"20px" }}>
      <hr/>
      <div>
        <h1 style={{ textAlign: "center", padding:"10px" }} >Today</h1>
      </div>
        <hr/><input type="text" placeholder="Search.." class="homesearch-big"/>

        <div className="homechart">
          
          <PieChart width={400} height={400}>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={60}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>

          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          > 
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
          
        </div>
        <hr/>
      <h1 style={{ textAlign: "center", padding:"10px" }} >Reports</h1>
        <hr/>

        <select class="reportdropdown-big">
          <option value="volvo">Last one week </option>
          <option value="saab">Last one month</option>
          <option value="opel">Last six months</option>
          <option value="audi">Last one year</option>
        </select>

        <select class="reportdropdown-small">
          <option value="volvo">All PGs</option>
          <option value="saab">Single PGs</option>
        </select>

        <div className="homechart" style={{ textAlign: "center", padding:"50px" }}>

          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          > 
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
          
        </div>
        
    </div>
    
  );
};

export default Home;