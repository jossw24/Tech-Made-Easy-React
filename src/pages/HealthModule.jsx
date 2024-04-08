import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";

const HealthModule = () => {
  return (
    <Layout>
      <div className="border-b py-6 bg-gray-700">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <h1 className="text-xl font-semibold text-white">Physical health when using technology:</h1>
          <div className=" text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/modules-page">Modules</Link>
              </li>
              <li>Health</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-700">
        <p>Taking movement breaks often, using standing desks, and maintaining good posture are essential for your health when using digital devices for prolonged periods.</p>
        
        <div className="my-4">
          <img src={require('../assets/posture.webp')} alt="Posture" className="max-w-full" />
        </div>
        
        <p>The 20-20-20 rule is a good practice for eye health. After 20 minutes of screen time, look 20 feet away for 20 seconds. This helps give your eyes a break from focusing on close objects for extended periods, which can strain them and affect long-distance vision.</p>
        
        {/* Insert additional health tips here */}
      </div>
    </Layout>
  );
};

export default HealthModule;
