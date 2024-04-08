import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";

const SafetyModule = () => {
  return (
    <Layout>
      <div className="border-b py-6 bg-gray-700" >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 bg-gray-700">
          <h1 className="text-xl font-semibold text-white bg-gray-700">Being safe on the internet</h1>
          <div className=" text-sm breadcrumbs ">
            <ul>
              <li>
                <Link className = "text-white" to="/">Home</Link>
              </li>
              <li>
                <Link className = "text-white" to="/modules-page">Modules</Link>
              </li>
              <li className = "text-white" >Safety</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-700">
        <h2 className="text-lg font-semibold text-white mb-4">Internet Safety Tips:</h2>
        <p className="text-white">Rule number one:If you're not sure if something is safe, don't click or give personal information!</p>
        
        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Being aware of scams:</h3>
        <p className="text-white">What is spam?</p>
        <ul className="list-disc text-white pl-8">
          <li>Spam uses deceptive tactics such as misleading subject lines or forged sender addresses to trick recipients into opening them.</li>
          <li>Spam often contains links to malicious websites or attachments that may contain malware.</li>
          <li>Spam emails can be recognized by your email and sent to the spam folder to limit the user's interactions with potential spam dangers.</li>
        </ul>
        
        <p className="text-white">What are phishing emails?</p>
        <ul className="list-disc text-white pl-8">
          <li>Phishing has the intent of gaining access to one's accounts, information, and money making phishing much more harmful than spam.</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Types of phishing:</h3>
        <p className="text-white"><b>Generic Phishing Emails:</b> These emails typically impersonate well-known companies or institutions...</p>
        
        <p className="text-white"><b>Spear Phishing Emails:</b> Spear phishing emails are highly targeted and personalized to deceive people or organizations...</p>
        
        <p className="text-white"><b>Clone Phishing Emails:</b> Clone phishing emails are replicas of legitimate emails, often from trusted sources...</p>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Test your skills! Click below to practice your phishing email skills in a safe environment</h3>

        <a href="https://www.opendns.com/phishing-quiz/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Phishing Quiz</a>


      </div>
    </Layout>
  );
};

export default SafetyModule;
