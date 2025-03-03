import { useEffect, useState } from "react";
import ExamTemplete from "./ExamTemplete";
import { useDispatch } from "react-redux";
import { setSectionName } from "../rtk/slices/saveAswer";
import Swal from "sweetalert2";
import { resetTimer, startTimer } from "../rtk/slices/timerSlice";

function ListeningTest(props){

    const dispatch = useDispatch()
    const [listeningIntroDispaly ,setListeningIntroDispaly] =useState(props.listeningIntroDiplay);
    const  [templetDisplay ,setTempletDisplay ] = useState("none");



    useEffect(() => {
        setListeningIntroDispaly(props.listeningIntroDiplay);
    }, [props.listeningIntroDiplay]);

    const section = {
            "sectionName": "Listening",
            "sectionNotice": "You will start the listening section",
            "sectionImageSrc": "/images/listening_section.png",
            "sectionDescription": [
                { title: "Listening Skills", text: "The listening section assesses your ability to understand spoken English in various contexts." },
                { title: "Audio Types", text: "You will listen to conversations, lectures, announcements, and discussions." },
                { title: "Question Types", text: "Questions may require you to determine the speaker's purpose, main ideas, or specific details." }
            ]
        
    };

    const start = () => {
        Swal.fire({
            title: "Are you ready to start (Listening Test)?",
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
                setListeningIntroDispaly("none");
                setTempletDisplay("block");
                dispatch(setSectionName("listening"));
                dispatch(resetTimer())
                dispatch(startTimer())
            } 
        });
       

        
    }


    
    return(
        <>
        <div className="card"  style={{"display" : listeningIntroDispaly}}>
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
                    onClick={start}
                    >Start</button>
            </div>
                <ExamTemplete templetDisplay = {templetDisplay} key={"listening"} sectionName="listening"/>
        </>
    )
}

export default ListeningTest;