import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import questions from "../quick-test-data";
import { Link } from "react-router-dom";
import { saveReadingAnswer } from "../rtk/slices/saveAswer";

function ReadingQuestions(props){
    const dispatch = useDispatch();
    const studentAnswers = useSelector(state => state.studentAnswers);
    const [disabledPrev ,setDisabledPrev] = useState(true);
    const [index, setIndex] = useState(0); 
    const  [templetDisplay ,setTempletDisplay ] = useState(props.templetDisplay);
    const data = questions.reading;
    useEffect(() => {
        setTempletDisplay(props.templetDisplay);
    }, [props.templetDisplay]);
    
    const prevQusetion = () =>{
        if(index === 1) setDisabledPrev(true)
        setIndex(index-1)
    };
    const nextQusetion = () =>{
        if(index === 0) setDisabledPrev(false);
        if(index >= data.length-1)  return;
        setIndex(index+1)
    };
   const isChecked = (questionIndex , answer) => {
        const readingAnswers =studentAnswers.reading ||{}
        return readingAnswers[questionIndex] === answer;
    }
    const handleAnswerChange = (questionIndex, answer) => {
        dispatch(saveReadingAnswer({ questionIndex, answer }));           
    };

    const nextBtn = index === data.length - 1 ?
        <Link className="btn btn-primary" to={'/quick-test/listhening'}>Finish</Link>
        :<button className="btn btn-primary" onClick={nextQusetion}>Next</button>

        return(
            <>
            <div className="exame-page" style={{"display" : templetDisplay}}>
                <div className="exam-page-head">
                    <p className="notice-message">You will Read {data.length} sentence</p>
                    <p className="guidance">Choose the word or phrase that best completes each sentence</p>
                </div>
                <div className="card" >
                    <div className="qusetion reading">
                        <p>{data[index].question}</p>
                    </div>
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
                                            checked = {isChecked(index , answer)}
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
            </>
        )

}
export default ReadingQuestions;