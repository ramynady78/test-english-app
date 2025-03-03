import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stopTimer } from "../rtk/slices/timerSlice";

function Timer(){
    const dispatch = useDispatch()
    const timerStat = useSelector((state) => state.timer)
    const [time, setTime] = useState(timerStat.time);
    const isRunning = timerStat.isRunning;
    localStorage.setItem("time" , time)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };
    
    useEffect(() => {
        let interval;
    
        if (isRunning && time > 0) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
            localStorage.setItem("time" , time)
        }, 1000);
        } else if (time === 0) {
        dispatch(stopTimer())
        clearInterval(interval);
        }
    
        return () => clearInterval(interval);
    }, [isRunning, time]);

    
    return (
        <div className="countdown-timer">
        <h1 className="timer">{formatTime(time)}</h1>
        </div>
    );
}

export default Timer;