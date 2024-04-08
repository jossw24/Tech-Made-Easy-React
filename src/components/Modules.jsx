import React from 'react';
import { Link } from 'react-router-dom';

const Modules = ({ id, image, title, category, description }) => {
  // Function to determine the correct path based on module ID
  const getModulePath = (moduleId) => {
    switch (moduleId) {
      case 1:
        return '/safety';
      case 2:
        return '/health';
      case 3:
        return '/literacy';
      default:
        return '/';
    }
  };

  return (
    <div className="card bg-gray-700 shadow-xl">
      <figure className="px-10 pt-10 bg-gray-700">
        <div className="rounded-xl bg-gray-300 p-2">
          <img src={image} alt={title} className="rounded-xl max-h-40" style={{ objectFit: 'cover' }} />
        </div>
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-white">
          {title}
          <div className="badge badge-secondary text-xs">{category}</div>
        </h2>
        <p className="text-lg font-medium">{description}</p>
        <div className="card-actions">
          <Link to={getModulePath(id)} className="btn btn-primary"> 
          Start Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modules;
