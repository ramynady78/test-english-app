import { useDispatch } from "react-redux";
import ReadingTest from "./ReadingTest";
import { setTestTime } from "../rtk/slices/timerSlice";
function StandardTest(){
    localStorage.setItem("testName","standard"); 
    const dispatch = useDispatch();
    dispatch(setTestTime())
    return(
        <div className="quick-test">
        <div className="nav-bar">Logo</div>
        <div className="quick-test-container">
            <ReadingTest/>
        </div>
        </div>
    )
}

export default StandardTest;