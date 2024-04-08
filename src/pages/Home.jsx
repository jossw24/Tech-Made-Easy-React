import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import banner from "../assets/banner.png";

export default function Home() {
    return (
      <Layout>
      <div className="hero py-32 bg-gray-700">
          <div className="hero-content grid md:grid-cols-2 gap-8">
            <div className="order-2">
                <img src={banner} className="" alt="banner" />
            </div>
            <div>
              <h1 className="text-5xl font-bold leading-normal text-white">
                Technology Made Easy.
              </h1>
              <p className="py-6 text-gray-300">
                Your go to place for tackling the growing virtual world.
                 Expand you knowledge in literacy, safety, privacy and more. All through our intuitive and easy to follow modules  
              </p>
              <Link to="/modules-page">
                  <button className="btn btn-primary mt-4">Explore Modules</button>
              </Link>
            </div>
          </div>
      </div>
      </Layout>
    )
  }