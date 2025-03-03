import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBook, FaHeadphones, FaMedal } from 'react-icons/fa';
import { finshTest } from "../rtk/slices/saveAswer";
import Swal from "sweetalert2";
import quickTestQuestions from "../data/quick-test-data";
import standardTestQuestions from "../data/standard-test-data";

function Result(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const resultDisplay = props.resultDisplay;
    const studentAnswers = useSelector(state =>state.studentAnswers);
    const readingAnswers = studentAnswers.reading;
    const listeningAnswers = studentAnswers.listening;
    const testName = localStorage.getItem("testName");
    let questions = {};
    const getData = () => {
        if(testName === "quick"){
            questions = quickTestQuestions;
        }else if(testName === "standard"){
            questions = standardTestQuestions;
        }
        return questions
    }
    const data = getData();
    const readingQuestions = data.reading;
    const listeningQuestions = data.listening;

    const  [readingResult , setReadingResult] = useState(0);
    const  [listeningResult , setListeningResult] = useState(0);
    const [totleResult , setToltleResult] = useState(0);
    const [message,setMessage] = useState("Message will show here!")
    // calc result
    const resultComparison = () => {
        let resultRading = 0
        let resultListing = 0
        
        for(let index = 0 ; index < readingQuestions.length; index++){
            if(readingQuestions[index].correctAnswer === readingAnswers[index]){
                resultRading++
            }
            if(listeningQuestions[index].correctAnswer === listeningAnswers[index]){
                resultListing++
            }
            
            
        }
        setReadingResult(resultRading);
        setListeningResult(resultListing);
        let finalResult = (resultRading + resultListing) / (listeningQuestions.length + readingQuestions.length)
        setToltleResult(finalResult * 100);

        if (finalResult * 100 >= 80) {
            setMessage("Excellent! You performed very well!");
        } else if (finalResult * 100 >= 50) {
            setMessage("Good! But you can improve further.");
        } else {
            setMessage("You need significant improvement. Keep trying!");
        }

        const readingPrercentage = (resultRading / readingQuestions.length) * 100;
        const listeningPrercentage = (resultListing / listeningQuestions.length) * 100;

        if (readingPrercentage <= 60 ) {
            setMessage((prev) => prev + "Try to improve your performance in the Reading section.");
        }
        if (listeningPrercentage <= 60) {
            setMessage((prev) => prev + "Try to improve your performance in the Listening section.");
        }

    };

    const endTest = () => {
        Swal.fire({
            title:"Are you sure ? \n if finshed  all results will be delete",
            showCancelButton:true,
            confirmButtonText:"sure",
            allowOutsideClick:false,
        }).then((result) => {
            if(result.isConfirmed){
                setTimeout(() => {
                    dispatch(finshTest())
                    navigate("/")
                },500)
            }
        })
       
    }
        
    
    
    return(
        <div className="result" style={{"display" : resultDisplay}}>
            <div className="container p-3">
                <div className="card result-card">
                <div className="head-massege">
                    <p>Result</p>
                </div>
                <div className="show-result">
                    <p className="percentage-result"><b><FaMedal/> Result in percentage</b>{totleResult.toFixed(2) ||"0"} %</p>
                    <p className="reading-result"><b><FaBook/> Reading Result</b>{readingResult || "0"} of {readingQuestions.length}</p>
                    <p className="listening-result"><b><FaHeadphones/> Listening Result</b>{listeningResult || "0"} of {listeningQuestions.length}</p>

                </div>
                <div className="message">
                    <p>{message}</p>
                </div>
                <div className="buttons"> 
                <button className="btn show-result-btn" 
              onClick={(event) => { 
                event.target.disabled = true;
                setTimeout(() => {
                    resultComparison();
                },500)
            }}
            
                >Show Result</button>
                <Link  className="btn btn-success finsh-btn" onClick={endTest}>Finsh</Link>
                </div>
                </div>
            </div>
        </div>
    )

}

export default Result;