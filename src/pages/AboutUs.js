import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="container about-container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">Excellence English Tests</h1>
        <p className="lead text-warning">Your pathway to language proficiency and global opportunities</p>
      </header>

      <section className="row mb-5">
        <div className="col-md-6">
          <img src="https://placehold.co/600x400/001f3f/ffcc00?text=English+Testing" alt="English Testing" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="text-dark mb-4 mt-4">About Our Tests</h2>
          <p className="lead">
            Welcome to Excellence English Tests, where we provide internationally recognized English proficiency assessments designed to open doors to academic and professional opportunities worldwide.
          </p>
          <p>
            Our tests are meticulously crafted by language experts with decades of experience in linguistic assessment and education. We believe in creating fair, accurate, and comprehensive evaluations that truly reflect your English language abilities.
          </p>
        </div>
      </section>

      <section className="bg-light p-4 rounded shadow-sm mb-5">
        <h2 className="text-center text-dark mb-4">Our Mission</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center">
              <i className="fas fa-globe fa-3x text-primary mb-3"></i>
              <h3 className="h5">Global Access</h3>
              <p>Providing accessible testing solutions to learners worldwide, regardless of background or location.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
              <h3 className="h5">Accurate Assessment</h3>
              <p>Delivering precise evaluations that genuinely reflect language proficiency and communication skills.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <i className="fas fa-door-open fa-3x text-primary mb-3"></i>
              <h3 className="h5">Opening Opportunities</h3>
              <p>Helping test-takers access educational and professional opportunities around the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-center text-dark mb-4">Why Choose Our Tests?</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="d-flex">
              <i className="fas fa-check-circle text-warning fa-2x me-3"></i>
              <div>
                <h3 className="h5">International Recognition</h3>
                <p>Our certificates are accepted by over 10,000 institutions worldwide, including top universities and employers.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="d-flex">
              <i className="fas fa-check-circle text-warning fa-2x me-3"></i>
              <div>
                <h3 className="h5">Comprehensive Assessment</h3>
                <p>We evaluate  language skills: reading,and listening, providing a complete picture of your abilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white p-5 rounded shadow mb-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="mb-3">Ready to demonstrate your English proficiency?</h2>
            <p className="lead mb-4">Join millions of test-takers who have advanced their careers and education through our globally recognized assessments.</p>
            <Link className="btn btn-warning btn-lg px-4" to={"/"}>Our Tests</Link>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-graduation-cap fa-5x"></i>
          </div>
        </div>
      </section>

      <section className="p-5">
        <h2 className="text-center text-dark mb-4">About the Creator</h2>
        <div className="text-center">
        <p className="lead">
            This platform was created by <b>RAMY NADY</b>, a passionate front-end developer with experience in building modern, responsive websites and digital solutions.
        </p>
        <p>
          With expertise in React, Redux, and modern web development technologies, he built this platform to make language learning accessible, efficient, and rewarding.
        </p>
        <p>
          Feel free to connect with me on <a href="https://t.me/ramynady8" target='_blank'>Telegram</a> for any inquiries or collaborations.
        </p>

          <p className="fw-bold text-warning">Built with passion and perseverance 🚀</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
