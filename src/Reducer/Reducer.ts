import { data } from "../DB/questionDB";
import { ActionType, State } from "../Types";

export default function reducer(state: State, action: ActionType) {
  switch (action.type) {
    //   case "SELECTED":
    //     return { ...state, isSelected: true };
    case "SCORE_INCREMENT":
      return { ...state, score: state.score + 1 };
    case "IS_SELECTED":
      return { ...state, isSelected: true };
    case "CLEAR_SELECETED":
      return { ...state, isSelected: false };
    case "NEXT":
      return { ...state, questionNumber: state.questionNumber + 1 };
    case "SELECTED_QUIZ":
      if (action.payload === "marvel") {
        return { ...state, selectedQuiz: data.marvelQuiz };
      } else if (action.payload === "react") {
        return { ...state, selectedQuiz: data.reactQuiz };
      } else if (action.payload === "tech") {
        return { ...state, selectedQuiz: data.techQuiz };
      }
      break;
    case "CLEAR":
      return { ...state, isSelected: false, questionNumber: 0,score:0,streak:0 };
    case "STREAK":
      if (action.payload.breakStreak) {
        return { ...state, streak: 0 };
      }
      return { ...state, streak: state.streak + 1 };
    default:
      return state;
  }
}
