import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
const ModuleDetails = () => {
    return (
      <Layout>
        <div className="border-b py-6">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                <h1 className="text-xl font-semibold text-black">Start your learning journey with us!</h1>
                <div className=" text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Modules</Link>
                        </li>
                    <li>View Module</li>
                </ul>
                </div>
            </div>
        </div>
      </Layout>
    );
  };
  
  export default ModuleDetails;