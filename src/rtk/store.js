import { configureStore } from "@reduxjs/toolkit";
import studentAnswersSlice from "./slices/saveAswer";
import timerSlice from "./slices/timerSlice"

const store = configureStore({
    reducer:{
        studentAnswers:studentAnswersSlice,
        timer:timerSlice,
    }
});

export default store;