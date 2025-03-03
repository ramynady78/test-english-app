import { useEffect, useState } from "react";
import quickTestQuestions from "../data/quick-test-data";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { saveListeningAnswer, saveReadingAnswer, selectSectionName, setSectionName } from "../rtk/slices/saveAswer";
import ListeningTest from "./ListeningTest";
import Result from "./Result";
import Swal from "sweetalert2";
import Timer from "./Timer";
import { stopTimer } from "../rtk/slices/timerSlice";
import standardTestQuestions from "../data/standard-test-data";

function ExamTemplete(props){
    const sectionName = props.sectionName; 
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

    const data = sectionName === "reading"?
     getData().reading :sectionName === "listening"? 
     getData().listening:null;

    const dispatch = useDispatch();
    const studentAnswers = useSelector(state => state.studentAnswers);
    const [index , setIndex] = useState(0);
    const [disabledPrev ,setDisabledPrev] = useState(true);
    const  [listeningIntroDiplay , setListeningItroDiplay] = useState("none");
    const  [templetDisplay ,setTempletDisplay ] = useState(props.templetDisplay);
    const  [resultDisplay ,setResultDisplay ] = useState("none");
    const [time , setTime] = useState(parseInt(localStorage.getItem("time")))

    useEffect(() => {
        const interval = setInterval(() => {
            const storedTime = parseInt(localStorage.getItem("time"));
            setTime(storedTime || 0);
          }, 1000);
          return () => clearInterval(interval);
    },[])
    useEffect(() => {
        if (time === 0) {
            finshTime();
        }
    }, [time]);
    
 

    const sectionNameStorage = useSelector(selectSectionName, shallowEqual);
    
    
    useEffect(() => {
        setTempletDisplay(props.templetDisplay);
    }, [props.templetDisplay]);
 
    const prevQusetion = () =>{
        if(index === 1) setDisabledPrev(true)
        let x = index - 1
        setIndex(x)
    };
    const nextQusetion = () =>{
        if(index === 0) setDisabledPrev(false);
        if(index >= data.length-1)  return;
        let x = index + 1
        setIndex(x)
    };
    const questionTitle = () => {
        if(sectionName === "reading"){
            return (
                <div className="qusetion reading">
                    <p><b>{index+1}</b> ) {data[index].question}</p>
                </div>
            )
        }else if(sectionName === "listening"){
            return (
                <div className="qusetion listining">
                <audio key={data[index].audioSrc} controls>
                    <source src={data[index].audioSrc} type="audio/mpeg"/>
                </audio>
                <p><b>{index+1}</b> ){data[index].question}</p>
                </div>
            )

        }
    }

    const nextSection = () => {
        if(sectionNameStorage === "reading"){
            Swal.fire({
                title: "Get ready for the next section!",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false,
            }).then(() => {
                Swal.fire({
                    title: "Are you sure? You will go to the next section!",
                    showCancelButton: true,
                    allowOutsideClick: false,
                    confirmButtonText: "Next",
                }).then((result) => {
                    if (result.isConfirmed) {
                        setTimeout(() => {
                            setIndex(0);
                            setListeningItroDiplay("block");
                            setTempletDisplay("none");
                            dispatch(stopTimer())
                        },200)
                    }
                });
            });
        }else{
            Swal.fire({
                title: "Are you sure? You will go to the next section!",
                showCancelButton: true,
                allowOutsideClick: false,
                confirmButtonText: "Next",
            }).then((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                        setIndex(0);
                        setResultDisplay("block");
                        setTempletDisplay("none");
                        dispatch(stopTimer())
                    },200)
                }
            });
            
        }
    };

    const finshTime = () => {
        Swal.fire({
            title: "Time is up!",
            text: sectionNameStorage === "reading" ? 
                  "The reading section is over. Get ready for listening!" : 
                  "The listening section is over. Check your results!",
            icon: "warning",
            allowOutsideClick: false,
            confirmButtonText: "OK",
        }).then(() => {
            dispatch(stopTimer());
            setIndex(0);
            setTempletDisplay("none");
            if (sectionNameStorage === "reading") {
                setListeningItroDiplay("block");
            } else if (sectionNameStorage === "listening"){
                setResultDisplay("block");
                dispatch(setSectionName("result"))
            }
        });
    };
    
 
    
    const handleAnswerChange = (questionIndex, answer) => {
        if(sectionName === "reading"){
            dispatch(saveReadingAnswer({ questionIndex, answer }));
        }else if(sectionName === "listening"){
            dispatch(saveListeningAnswer({questionIndex , answer}));
        }
        
    };
    
    const isChecked = (questionIndex, answer) => {
            const sectionAnswers = studentAnswers[sectionNameStorage] ||{};
            return sectionAnswers[`${questionIndex}`] === answer;
    };

  
    const nextBtn = index === data.length - 1 ?
        <button className="btn btn-primary next-btn" onClick={nextSection}>Finish</button>
        :<button className="btn btn-primary next-btn" onClick={nextQusetion}>Next</button>
    
               
 
    return(
        <>
        <div className="exame-page" style={{"display" : templetDisplay}}>
            <div className="exam-page-head">
                {
                    sectionName === "reading" ? 
                    <p className="notice-message">You will Read {data.length} sentence</p>
                    : <p className="notice-message">You will hear {data.length} speakers</p>
                }
                {
                    sectionName === "reading" ? 
                    <p className="guidance">Choose the word or phrase that best completes each sentence</p>
                    :<p className="guidance">Choose the best option for what comes next in the conversation</p>
                }
                
            </div>
            <Timer key={sectionNameStorage} />
            <div className="card" >
                    {questionTitle()}
                <div className="answers">
                    {
                    data[index].answers.map((answer, answerIndex) => {
                        const radioId = `radio-${index}-${answerIndex}`; 
                        return (
                            <div className="input-group" key={radioId}>
                                <div className="input-group-text">
                                    <input 
                                        className="form-check-input mt-0" 
                                        type="radio" 
                                        name={`answer-${index}`} 
                                        id={radioId}
                                        checked ={isChecked(index , answer)}
                                        onChange={() => handleAnswerChange(index , answer)}
                                    />
                                </div>
                                <label htmlFor={radioId} className="form-control" >
                                    {answer}
                                </label>
                            </div>
                        );
                        })
                    }
                </div>
                <div className="buttons">
                <button className="btn btn-danger prev-btn" onClick={prevQusetion} disabled={disabledPrev}>Prev</button>
                {nextBtn}
                </div>
            </div>
        </div>
        {
           
            sectionName === "reading" ? (
                <ListeningTest listeningIntroDiplay={listeningIntroDiplay} />
            ) : sectionName === "listening" ? (
                <Result resultDisplay={resultDisplay} />
            ) : null
        }
        
        </>
    )
}

export default ExamTemplete;