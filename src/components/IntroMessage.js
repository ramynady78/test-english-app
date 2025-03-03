import React from "react";

function IntroMessage() {
  const scrollToExams = () => {
    const element = document.getElementById("exams-cards");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="intro-container d-flex align-items-center justify-content-center">
      <div className="text-center p-5">
      <div className="marquee">
        <h1 className="display-4 fw-bold text-white mb-4">
          Test Your English Level for Free! 
        </h1>
      </div>
        <p className="message text-white mb-4">
          Start your test now and discover your true level in reading and listening — from home.
        </p>
        <button
        className="btn btn-light btn-lg intro-btn"
        onClick={scrollToExams}>
          Start Your Test Now
        </button>
      </div>
      
    </div>
  );
}

export default IntroMessage;
