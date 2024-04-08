import React from "react";
import Layout from "../components/Layout";
import Modules from "../components/Modules";
import { MODULES } from "../pages/ModuleList";

const ModulesPage = () => {
  return (
    <Layout>
      <div className="py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((module) => (
            <Modules
              key={module.id}
              id={module.id}
              image={module.image}
              title={module.title}
              category={module.category}
              description={module.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ModulesPage;
