export type Option = {
	order: string;
	title: string;
	isRight: boolean;
	isSelected: boolean;
  };
  
 export type Question = { question: string; options: Option[] };
  
  export type Quiz = { name: string; questions: Question[] };
  
  export type State = {
	score: number;
	username: string;
	isSelected: boolean;
	questionNumber: number;
	selectedQuiz:Quiz;
	streak:number
  };
  
  export type ActionType =
	| {
		type: "IS_SELECTED";
	  }
	| {
		type: "INCREMENT_QUESTION_NUMBER";
	  }
	| {
		type: "SCORE_INCREMENT";
	  }
	| {
		type: "RESET";
	  }
	| { type: "NEXT" }
	| { type: "CLEAR_SELECETED" }
	|{ type:"SELECTED_QUIZ",payload:string}
	| { type: "CLEAR"}
	| { type: "STREAK";payload:{breakStreak:boolean}}
	
  
  export type Value = { state: State; dispatch: (action: ActionType) => void };
  