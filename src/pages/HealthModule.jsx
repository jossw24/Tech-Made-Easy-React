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
                <Link className="text-white" to="/">Home</Link>
              </li>
              <li>
                <Link className="text-white" to="/modules-page">Modules</Link>
              </li>
              <li className="text-white">Health</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-700">
      <h3 className="text-lg font-semibold text-white mt-4 mb-2">Movement breaks</h3>
      <ul>
  <li>
    <p>Taking movement breaks often, using standing desks, and maintaining good posture are essential for your health when using digital devices for prolonged periods.</p>
  </li>
  <li>
    <p>Use screens/computers in moderation. Taking breaks often lowers screen time and lowers sedentary hours during the day.</p>
  </li>
  <li>
    <p>Keep the keyboard right in front of you when typing to keep wrists in an optimal position. Wrist-rests can be placed parallel to the keyboard to help hold wrists slightly higher than the keyboard to decrease wrist strain.</p>
  </li>
  <li>
  <h3 className="text-lg font-semibold text-white mt-4 mb-2">Stretching in between long durations of sitting in front of a computer is important. Here are some simple stretches to try!</h3>
    <p><img src={require("../assets/movement.gif")} alt="movement break" /></p>
  </li>
</ul>


        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Correct that posture!</h3>
        <div className="my-4">
          <img src={require('../assets/posture.webp')} alt="Posture" className="max-w-full" />
        </div>
        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Vision Health</h3>
        <p>The 20-20-20 rule is a good practice for eye health. After 20 minutes of screen time, look 20 feet away for 20 seconds. This helps give your eyes a break from focusing on close objects for extended periods, which can strain them and affect long-distance vision.</p>
        <p>Avoid maximum brightness to avoid headaches and further eye strain</p>
        
        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Watch this great video on how to setup your work and computer area</h3>
        <a href="https://youtu.be/riD8Xt8r1MQ?si=LxA9PitNgWi26K-R" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Click here for ergonomics video!</a>

       
        {/* 
        Image citations:
        General exercises. Human Resources - Western University. (n.d.). https://www.uwo.ca/hr/safety/well_being/ergonomics/general.html  
        McConnell, S. (2023, August 20). 10 rules for maintaining proper posture at the computer. Arielle Executive. https://arielle.com.au/proper-posture-at-computer/ 
        */}
      </div>
    </Layout>
  );
};

export default HealthModule;
