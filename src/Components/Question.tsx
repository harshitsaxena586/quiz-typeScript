import { useApp } from "../Context/AppContextProvider";
import { Option } from "../Types";
import { motion } from "framer-motion";

export default function Question() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const { state, dispatch } = useApp();
  const {selectedQuiz} = state;
  const questionArr=selectedQuiz.questions; 
  const question = questionArr[state.questionNumber];
  const next = () => {
      !state.isSelected &&
      dispatch({ type: "NEXT" });
      dispatch({ type: "CLEAR_SELECETED" });
  };

  function answerVerifer(item: Option) {
    dispatch({ type: "IS_SELECTED" });
    if (item.isRight) {
      dispatch({ type: "SCORE_INCREMENT" });
      dispatch({ type:"STREAK",payload:{breakStreak:false}})
    }
    else dispatch({ type:"STREAK",payload:{breakStreak:true}})
  }

  return (
    <div>
      {state.questionNumber < questionArr.length  &&
      
      <div className="ques-structure">
        <motion.div  initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={variants} className="question">
          <h1>{question.question}</h1>
        </motion.div>
        <div className="options-wrap">
          {question.options.map((item: any) => (
            <div
              onClick={async () => {
                !state.isSelected && answerVerifer(item);
                await setTimeout(() => {
                  next();
                }, 1800);
              }}
              className={`option ${
                state.isSelected === true && item.isRight && "correct-answer"
              }`}
            >
              <div className="order">{item.order}</div>
              <h2 className="option-text">{item.title}</h2>
              <br />
            </div>
          ))}
        </div>
        <div className="score">
        <h2>Score {state.score*10}</h2>
        <h2>Streak {state.streak}</h2>
      </div>
      </div>
      }
    </div>
  );
}
