import React from 'react';
import { Link } from 'react-router-dom';

const Modules = ({ image, title, category, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="rounded-xl bg-gray-300 p-2">
          <img src={image} alt={title} className="rounded-xl max-h-40" style={{ objectFit: 'cover' }} />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">
          {title}
          <div className="badge badge-secondary text-xs">{category}</div>
        </h2>
        <p className="text-lg font-medium">{description}</p>
        <div className="card-actions">
          <Link to="/module-details" className="btn btn-primary">
            Start Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modules;
