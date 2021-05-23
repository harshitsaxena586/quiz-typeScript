import React, { useEffect } from "react";
import Question from "../Components/Question";
import { useParams } from "react-router-dom";
import { useApp } from "../Context/AppContextProvider";
import Result from "../Components/Result";

export default function Home() {
  const { state,dispatch } = useApp();
  let { quizname } = useParams();
  useEffect(
    () =>
       dispatch({ type: "SELECTED_QUIZ",payload:quizname })
      ,[]
  );
  
  return (
    <div className="question-body">
       <Question/>
      {state.questionNumber===state.selectedQuiz.questions.length && <Result/>}  
    </div>
  );
}
