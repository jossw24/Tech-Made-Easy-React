const MODULES = [
    {
        id:1,
        image: safety,
        title: "Internet Safety",
        category: "Safety",
        description: "Being safe in the online world"
    },
    {
        id:2,
        image: health,
        title: "Health and wellness",
        category: "Health",
        description: "Taking care of your physical health when using technology"
    },
    {
        id:3,
        image: literacy,
        title: "Device Literacy",
        category: "Literacy",
        description: "Efficiently tackle and navigate the online world"
    },

]

const Modules = ({ image, title, category, description }) => {
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl" />
        </figure>
        <div className=" card-body items-center text-center">
          <h2 className="card-title text-white">
            {title}
            <div className="badge badge-secondary text-xs">{category}</div>
          </h2>
          <p className="text-lg font-medium">{description}</p>
          <div className="card-actions">
            <Link to="/book-details" className="btn btn-primary">
              Start Now!
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modules;