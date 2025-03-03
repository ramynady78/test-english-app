import { useDispatch } from "react-redux";
import ReadingTest from "./ReadingTest";
import { setTestTime } from "../rtk/slices/timerSlice";

function QuickTest(){
    localStorage.setItem("testName","quick")
    const dispatch = useDispatch();
    dispatch(setTestTime());
   
    return(
        <div className="quick-test">
            <div className="nav-bar">logo</div>
            <div className="quick-test-container">
                <ReadingTest/>
            </div>
        </div>
    )
}

export default QuickTest;