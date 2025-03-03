import React from "react";
function FutureGoals() {
  return (
    <div className="future-goals">
      <section className="goal-section">
        <h1 className="section-title">Our Vision for the Next 5 Years</h1>
        <p className="section-description">
          We are committed to building a leading platform that empowers businesses and individuals through innovation and technology. Our goal is to make a positive impact on thousands of lives worldwide by delivering exceptional value and creating a thriving community.
        </p>
        <div className="stats-container">
          <div className="stat-box">
            <h2>100+</h2>
            <p>Global Clients</p>
          </div>
          <div className="stat-box">
            <h2>500+</h2>
            <p>Successful Projects</p>
          </div>
          <div className="stat-box">
            <h2>1M+</h2>
            <p>Users Reached</p>
          </div>
          <div className="stat-box">
            <h2>50+</h2>
            <p>Team Members</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FutureGoals;
