import { Link } from "react-router-dom";

function AdvancedTest() {
    return (
      <>
        <div className="container advanced-test-container py-5">
          <header className="text-center mb-5">
            <h1 className="display-6 fw-bold text-danger">Advanced Test</h1>
            <p className="lead text-muted">
              Unfortunately, this test is not available at the moment. We are working hard to prepare it as soon as possible to meet your expectations. Our goal is to provide a high-quality assessment that truly reflects your English proficiency. We appreciate your patience and understanding!
            </p>
          </header>
  
          <section className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="mb-3">Quick Test</h3>
                  <p className="exam-expline">A short assessment to quickly evaluate your English level.</p>
                  <Link 
                  className="btn go-btn"
                  to={`/quick/test-details`}
                  >Quick Test</Link>
                </div>
              </div>
            </div>
  
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="mb-3">Standard Test</h3>
                  <p className="exam-expline">Our standard English proficiency assessment for academic and professional purposes.</p>
                  <Link 
                  className="btn go-btn"
                  to={`/standard/test-details`}
                  >Standard Test</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
  
  export default AdvancedTest;
  