import { createSlice } from "@reduxjs/toolkit";

const getInitialTime = () => {
  const testName = localStorage.getItem("testName");
  if (testName === "quick") {
    return 7 * 60;
  } else if (testName === "standard") {
    return 25 * 60;
  } else if (testName === "advanced") {
    return 45 * 60;
  }
  return 7 * 60; // Default time
};


const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isRunning: false,
    time:getInitialTime(),
  },
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
        state.time = getInitialTime();
        state.isRunning = false;
    },
    setTestTime: (state) => {
      state.time = getInitialTime(); 
    },
  },
});

export const { startTimer, stopTimer , resetTimer,setTestTime} = timerSlice.actions;
export default timerSlice.reducer;
