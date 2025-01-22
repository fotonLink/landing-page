import React from "react";

// Define the feature item type
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  // Define the features array
  const features: Feature[] = [
    {
      icon: "bi-box-arrow-in-right",
      title: "Register/Login",
      description: "Create an account to access all features",
    },
    {
      icon: "bi-person-circle",
      title: "Create/Update Profile",
      description: "Build your profile and showcase your expertise",
    },
    {
      icon: "bi-search",
      title: "Search for Partners",
      description: "Find and connect with potential partners",
    },
    {
      icon: "bi-people-fill",
      title: "Matchmaking",
      description: "Get matched with suitable collaborators",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F9F9F9", width: "100%" }}>
      <div
        className="container py-5-light align-center"
        id="features"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <div className="row text-center">
          {features.map((feature, index) => (
            <div className="col-md-3 mb-3 mt-3" key={index}>
              <i className={`bi ${feature.icon} display-6 text-warning `}></i>
              <h5 className="mt-3">{feature.title}</h5>
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
