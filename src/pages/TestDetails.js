import { useParams } from "react-router";
import examsInformations from "../data/examsInfo";
import { Link } from "react-router-dom";
import NotHaveFreeTime from "../components/NotHaveFreeTime";

function TestDetails(){
    const {testName} = useParams();
    const examInfo = examsInformations;
    const testDetails = examInfo.find(exam => exam.examName.toLowerCase() === testName); 

    return(
        <div className="details-page">
            <div className="details-container">
                <h1 className="short-explation">{testDetails.shortExplation}</h1>
                <div className="card card-details">
                    <div className="left-section" style={{"color" : testDetails.fontColor}}>
                    <p className="exam-time">{testDetails.examTime}</p>
                            <div className="exam-datials">
                                <p className="min">Min</p>
                                <p className="exam-name">{testDetails.examName}</p>
                            </div>
                    </div>
                    <div className="right-section">
                        <div className="exam-info">
                            <p className="exam-description">{testDetails.examDescription}</p>
                                <ul>
                                    {
                                        testDetails.examAdventages.map(adv => (
                                            <li key={adv}>{adv}</li>
                                        ))
                                    }
                                </ul>
                            
                        </div>
                        <Link className="btn take-test" style={{ backgroundColor: testDetails.fontColor }} to={`/${testDetails.examName.toLowerCase()}-test`}>Take the test</Link>
                        
                    </div>
                </div>
            </div>
            <section className="exam-info-section">
                <h2>About the English Test</h2>
                <p>
                    Our test is designed to evaluate your reading and listening skills through diverse topics.
                    The results help you understand your current level and areas to improve.
                </p>
                <div className="info-cards">
                    <div className="card">
                    <h3>Test Duration</h3>
                    <p>{testDetails.examTime} minutes</p>
                    </div>
                    <div className="card">
                    <h3>Question Types</h3>
                    <p>{testDetails.numberOfQuestions} Reading & {testDetails.numberOfQuestions} Listening questions</p>
                    </div>
                    <div className="card">
                    <h3>Benefits</h3>
                    <p>Accurate results, free access, and personalized feedback!</p>
                    </div>
                </div>
                </section>
                {
                testDetails.examName !== "Quick"?
                <NotHaveFreeTime />:null
                }
        </div>
    )
}

export default TestDetails;