import { useApp } from "../Context/AppContextProvider";

export default function Question() {
  const { state } = useApp();
  return (
    <div className="review-body">
      {state.selectedQuiz.questions.map((item) => {
        return (
          <div className="review-structure question">
            <h1>{item.question}</h1>
            <div className="options-wrap">
                {item.options.map((option) =>
                <div className={`option ${option.isRight && "correct-answer"}`}>
                <div className="order">{option.order}</div>
                <h2 className="option-text">{option.title}</h2>
                <br />
              </div>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
