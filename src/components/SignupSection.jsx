import React from "react";

function SignupSection() {
  return (
    <div className="text-center bg-warning py-5" id="signup">
      <h2 className="text-dark">Ready to Get Started?</h2>
      <p className="text-light">
        Create your account today and join the global photonics network.
      </p>
      <a className="btn btn-dark btn-lg" href="#signup-form">
        Sign up
      </a>
    </div>
  );
}

export default SignupSection;
