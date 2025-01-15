import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Replace with the path to your image

function Hero() {
  return (
    <div
      className="container py-5 d-flex align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6 text-center text-md-center">
          <h1 className="display-6 fw-bold">
            Connecting the{" "}
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "3px 3px",
              }}
            >
              Photonics
            </span>
          </h1>
          <h1 className="display-6 fw-bold">Industry Globally</h1>
          <p className="display-9 lead mt-3">
            Join the premier platform for photonics
            <br></br>
            professionals and companies
          </p>
          <div className="mt-5">
            <a className="btn btn-warning btn-lg me-3" href="#signup">
              Sign up
            </a>
            <a className="btn btn-dark btn-lg" href="#learn-more">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="col-md-6 shadow-lg p-0 mb-4 bg-white rounded"
          style={{ height: "400px" }}
        >
          <img
            src={heroImage}
            alt="Photonics industry illustration"
            className="img-fluid rounded h-100 w-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
