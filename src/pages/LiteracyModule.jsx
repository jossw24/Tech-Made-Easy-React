import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";

const LiteracyModule = () => {
  return (
    <Layout>
      <div className="border-b py-6 bg-gray-700">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 bg-gray-700">
          <h1 className="text-xl font-semibold text-white bg-gray-700">How can YOU become more digitally literate?</h1>
          <div className=" text-sm breadcrumbs bg-gray-700">
            <ul>
              <li>
                <Link className="text-white" to="/">Home</Link>
              </li>
              <li>
                <Link className="text-white" to="/modules-page">Modules</Link>
              </li>
              <li className="text-white">Literacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 bg-gray-700">
        
        <h3 className="text-lg text-white font-semibold mb-2">Start with the Basics:</h3>
        <p>Begin by familiarizing yourself with basic digital devices such as computers, smartphones, or tablets. Learn how to navigate the operating system, access settings, and use common features like web browsers (Google, Safari), as well as access emails and texts (replying to family members or friends).</p>
        
        <h3 className="text-lg text-white font-semibold mb-2">Enroll in Formal Training Programs:</h3>
        <p>Many community centres, libraries, and senior centres offer digital literacy classes or workshops specifically designed for seniors. These programs often cover topics such as basic computer skills, internet usage, email, and online safety.</p>
        
        <h3 className="text-lg text-white font-semibold mb-2">Ask for Help:</h3>
        <p>Don't hesitate to ask family members! Younger generations have grown up with these technologies and are, in most cases, skilled at problem-solving or teaching others how to use digital technologies. They can also provide guidance and support in learning new skills.</p>
        
        <h3 className="text-lg text-white font-semibold mb-2">Join Social Media Platforms:</h3>
        <p>Social media can be a valuable tool for staying connected with family and friends. Consider joining platforms like Facebook or WhatsApp to communicate, share updates, and participate in online communities with people who have similar interests.</p>
        
        <h3 className="text-lg text-white font-semibold mb-2">Stay Open to Learning:</h3>
        <p>Be open-minded and willing to learn new things. The digital landscape is constantly evolving, so embrace opportunities to expand your knowledge and skills as new technologies emerge.</p>
        
        <h3 className="text-lg text-white font-semibold mb-2">Practice Patience and Persistence:</h3>
        <p>Learning new digital skills can be challenging, especially for seniors who may not have grown up with technology. Be patient with yourself, and don't get discouraged if you encounter difficulties. With time and persistence, you can become more confident and proficient in using digital technologies.</p>
        <h3 className="text-lg text-white font-semibold mb-2">Want more practice? Visit Canada Center for Digital Literacy below, and try their interactive games and tests to get up to speed!:</h3>
        <a href="https://mediasmarts.ca/digital-media-literacy/educational-games" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Click here for learning games!</a>
      </div>
    </Layout>
  );
};

export default LiteracyModule;
