import  { createContext, useContext, useReducer } from 'react'
import { data } from '../DB/questionDB';
import reducer from '../Reducer/Reducer'
import {  State, Value } from "../Types";

const initialState:State = {
  score:0,
  username:"Harshit",
  isSelected:false,
  questionNumber:0,
  selectedQuiz:data.marvelQuiz,
  streak:0
 };

const AppContext = createContext({} as Value)

export default function AppContextProvider({children}:any) {

  const [state, dispatch] = useReducer(reducer,initialState)
    return (
   <AppContext.Provider value={{state,dispatch}}>
      {children}
   </AppContext.Provider>
    )
}

export function useApp(){
  return useContext(AppContext)
}