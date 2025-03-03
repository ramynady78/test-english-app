// rtk/slices/saveAnswer.js
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
    return {
        sectionName: localStorage.getItem("sectionName") || "reading",
        reading: JSON.parse(localStorage.getItem("readingAnswers")) || {},
        listening: JSON.parse(localStorage.getItem("listeningAnswers")) || {}
    };
};

const studentAnswersSlice = createSlice({
    name: "studentAnswers",
    initialState: getInitialState(),
    reducers: {
        setSectionName: (state, action) => {
            state.sectionName = action.payload;
            localStorage.setItem("sectionName", action.payload);
        },
        saveReadingAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload;
            state.reading[`${questionIndex}`] = answer;
            localStorage.setItem("readingAnswers", JSON.stringify(state.reading));
        },
        saveListeningAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload;
            state.listening[`${questionIndex}`] = answer;
            localStorage.setItem("listeningAnswers", JSON.stringify(state.listening));
        },
        finshTest:(state , action) => {
            Object.keys(state).forEach((key) => {
                state[key] = [];
            });
            localStorage.removeItem("listeningAnswers");
            localStorage.removeItem("readingAnswers");
            localStorage.removeItem("sectionName");
        }
    }
});

export const { setSectionName, saveReadingAnswer, saveListeningAnswer ,finshTest} = studentAnswersSlice.actions;
export const selectSectionName = (state) => state.studentAnswers.sectionName;
export default studentAnswersSlice.reducer;
