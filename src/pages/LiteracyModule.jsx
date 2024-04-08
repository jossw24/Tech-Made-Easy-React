import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";

const LiteracyModule = () => {
  return (
    <Layout>
      <div className="border-b py-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <h1 className="text-xl font-semibold text-black">Literacy</h1>
          <div className=" text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/modules">Modules</Link>
              </li>
              <li>Literacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Insert your Literacy content here */}
        <h2>Importance for digital literacy in seniors:</h2>
        <p>Access to Information: In the modern Western world, being able to access and sufficiently use the internet is crucial...</p>
        {/* Insert the rest of your content here */}
      </div>
    </Layout>
  );
};

export default LiteracyModule;
