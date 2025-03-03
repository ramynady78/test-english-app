import { Link } from "react-router-dom";

function NotHaveFreeTime(){

    return(
        <>
        <hr/>
       <div className="recommand">
        <h3>Don't have anough time?</h3>
        <p>Try our 15-minute quiz to get a general idea of your English proficiency.</p>
        <Link className="btn go-to-quick-test" to={'/quick/test-details'}>Quick Test</Link>
       </div>
        </>
    )

}
export default NotHaveFreeTime;