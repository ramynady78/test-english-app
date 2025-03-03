import { Link } from "react-router-dom";
import examsInformations from "../data/examsInfo";

function ExamsCards(){
    const examInfo = examsInformations;
    return(
        <div className="exams-cards" id="exams-cards">
            <div className="marquee">
                <h1 className="intro display-4 fw-bold text-white mb-4">Test your English now!</h1>
            </div>
            <div className="cards container ml-auto">
           {
            examInfo.map(exam => (
                <div className="card" key={exam.examName}>
                        <div className="card-head" style={{"color" : exam.fontColor}}> 
                            <p className="exam-time">{exam.examTime}</p>
                            <div className="exam-datials">
                                <p className="min">Min</p>
                                <p className="exam-name">{exam.examName}</p>
                            </div>
                        </div>
                      <div className="card-contains">
                        <p className="exam-description">{exam.examDescription}</p>
                            <ul>
                                {
                                    exam.examAdventages.map(adv => (
                                        <li key={adv}>{adv}</li>
                                    ))
                                }
                            </ul>
                      </div>
                      <div className="buttons">
                         <Link className="btn take-test" style={{ backgroundColor: exam.fontColor }} to={`${exam.examName.toLowerCase()}-test`}>Take the test</Link>
                         <Link className="test-details"
                         to={`/${exam.examName.toLowerCase()}/test-details`}
                         >Test details <span className="material-symbols-outlined">arrow_forward</span></Link>

                      </div>
                </div>
            ))
           }
            </div>
        </div>
    )
}
export default ExamsCards;