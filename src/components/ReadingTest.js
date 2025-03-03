import { useState } from "react";
import ExamTemplete from "./ExamTemplete";
import { useDispatch } from "react-redux";
import { setSectionName } from "../rtk/slices/saveAswer";
import Swal from "sweetalert2";
import { resetTimer, startTimer } from "../rtk/slices/timerSlice";

function ReadingTest(){
     const section = {
                "sectionName": "Reading",
                "sectionNotice": "You will start the reading section",
                "sectionImageSrc": "/images/reading section.jpeg",
                "sectionDescription": [
                    { title: "Comprehension Skills", text: "The reading section assesses your ability to understand and interpret written texts in English." },
                    { title: "Variety of Texts", text: "You will encounter different types of texts, such as articles, dialogues, or informational passages." },
                    { title: "Question Types", text: "Questions may ask you to identify the main idea, infer implicit information, or understand specific details." }
                ]
        };
     
        const dispatch = useDispatch()
        const  [introDiplay , setIntroDisplay] = useState("block");
        const  [templetDisplay ,setTempletDisplay ] = useState("none");

        const startExam = () => {
            Swal.fire({
                title: "Are you ready to start (Reading Test)?",
                showCancelButton: true,
                confirmButtonText: "Start",
                cancelButtonText: "Cancel",
                allowOutsideClick: false, 
                backdrop: true, 
                customClass: {
                    cancelButton: 'cancel-btn'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    setIntroDisplay("none");
                    setTempletDisplay("block");
                    dispatch(setSectionName("reading"));
                    dispatch(resetTimer())
                    dispatch(startTimer())
                } 
            });
            
        }
    return(
        <>
                <div className="card"  style={{"display" : introDiplay}}>
                    <div className="crad-head">
                        <p className="section-name">{section.sectionName}</p>
                        <p className="notice-section">{section.sectionNotice}</p>
                    </div>
                    <div className="sction-image">
                    <img className="reading-section-image" src={section.sectionImageSrc} alt={section.sectionName} />
                    </div>
                    <div className="section-description">
                        <ul>
                           {section.sectionDescription.map((dic) => (
                            <li key={dic.title}><b>{dic.title} : </b>{dic.text}</li>
                           ))}
                        </ul>
                    </div>
                    <button className="btn btn-primary"
                    onClick={startExam}>Start</button>
                </div>
                <ExamTemplete templetDisplay = {templetDisplay} key={"reading"} sectionName="reading"/>
            
        </>
    )

}

export default ReadingTest;