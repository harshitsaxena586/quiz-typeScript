import {Quiz} from "../Types"
  // --------tepm solution--------
type Database={marvelQuiz:Quiz,techQuiz:Quiz,reactQuiz:Quiz}
   const techQuiz: Quiz = {
    name: "Tech Quiz",
    questions: [
      {
        question:
          "What proccessing architecture is the new Apple M1 chip based on?",
        options: [
          { order: "A ", title: "ARM", isRight: true, isSelected: false },
          { order: "B", title: "X64", isRight: false, isSelected: false },
          { order: "C ", title: "x86", isRight: false, isSelected: false },
          { order: "D ", title: "PCIe", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "What is the codename for AMD series of mainstream mobile and desktop APUs based on the Zen 2 CPU and Vega GPU microarchitectures ",
        options: [
          { order: "A ", title: "Ampere", isRight: false, isSelected: false },
          { order: "B", title: "Renoir", isRight: true, isSelected: false },
          { order: "C ", title: "Picasso", isRight: false, isSelected: false },
          { order: "D ", title: "Tensor", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "What is the name of the world's fastest Super Computer ",
        options: [
          { order: "A ", title: "Trinity", isRight: false, isSelected: false },
          { order: "B", title: "Cray Xc40", isRight: false, isSelected: false },
          { order: "C ", title: "Fugaku", isRight: true, isSelected: false },
          { order: "D ", title: "PARAM", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "The New iPad pro 2021 comes with which apple proccessor ",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Which of the following is NOT a consumer grade CPU",
        options: [
          { order: "A ", title: "Snapdragon 888", isRight: false, isSelected: false },
          { order: "B", title: "EPYC", isRight: true, isSelected: false },
          { order: "C ", title: "Pentium", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Which of these companies is working on a massive satellite driven internet service",
        options: [
          { order: "A ", title: "Starlink", isRight: true, isSelected: false },
          { order: "B", title: "Apple", isRight: false, isSelected: false },
          { order: "C ", title: "BSNL", isRight: false, isSelected: false },
          { order: "D ", title: "At&t", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "All of the Silicon conductors for Xbox,Playstation,Apple and AMD come from --------",
        options: [
          { order: "A ", title: "Samsung", isRight: false, isSelected: false },
          { order: "B", title: "TSMC", isRight: true, isSelected: false },
          { order: "C ", title: "Qualcomn", isRight: false, isSelected: false },
          { order: "D ", title: "Intel", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Before Motto and Pixel ,google Used to launch there phones under which brand",
        options: [
          { order: "A ", title: "LG", isRight:false, isSelected: false },
          { order: "B", title: "Google", isRight: false, isSelected: false },
          { order: "C ", title: "Nexus", isRight: true, isSelected: false },
          { order: "D ", title: "piPhone", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Which is the most sold Iphone ever launched by Apple",
        options: [
          { order: "A ", title: "iPhone 6/6s", isRight: true, isSelected: false },
          { order: "B", title: "iPhone Xr", isRight: false, isSelected: false },
          { order: "C ", title: "The iPhone", isRight: false, isSelected: false },
          { order: "D ", title: "iPhone 12", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Which famous person is the CEO of two Billion dollar companies at the same time ",
        options: [
          { order: "A ", title: "Paul Graham ", isRight: false, isSelected: false },
          { order: "B", title: "Sundar Pichai", isRight: false, isSelected: false },
          { order: "C ", title: "Jack Dorsey", isRight: true, isSelected: false },
          { order: "D ", title: "Ajay Banga", isRight: false, isSelected: false }
        ]
      }
      
    ]
  };
  
 const marvelQuiz: Quiz = {
    name: "Marvel Quiz",
    questions: [
      {
        question:
          "Which of these is NOT an infinity stone? ",
        options: [
          { order: "A ", title: "Love", isRight: true, isSelected: false },
          { order: "B", title: "Reality", isRight: false, isSelected: false },
          { order: "C ", title: "Soul", isRight: false, isSelected: false },
          { order: "D ", title: "TIme", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Who was the Director of S.H.I.E.L.D. During the events of Avengers First ",
        options: [
          { order: "A ", title: "John Carter", isRight: false, isSelected: false },
          { order: "B", title: "Nick Fury", isRight: true, isSelected: false },
          { order: "C ", title: "Bucky", isRight: false, isSelected: false },
          { order: "D ", title: "Clark Kent", isRight: false, isSelected: false }
        ]
      }
      ,{
        question:
          "What is Captain America's shield made out of? ",
        options: [
          { order: "A ", title: "Vibranium", isRight: true, isSelected: false },
          { order: "B", title: "Adamantium", isRight: false, isSelected: false },
          { order: "C ", title: "Gravitonium", isRight: false, isSelected: false },
          { order: "D ", title: "Scabrite", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Where is Wakanda Located",
        options: [
          { order: "A ", title: "South America", isRight: false, isSelected: false },
          { order: "B", title: "Australia", isRight: false, isSelected: false },
          { order: "C ", title: "Africa", isRight: true, isSelected: false },
          { order: "D ", title: "Asia", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "What is the name of the marvel comic Legend who has made an appearance in all films of MCU",
        options: [
          { order: "A ", title: "Jack Kirby", isRight: false, isSelected: false },
          { order: "B", title: "Steeve Rogers", isRight: false, isSelected: false },
          { order: "C ", title: "Stan Lee", isRight: true, isSelected: false },
          { order: "D ", title: "Tony Stark", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "Thor’s hammer  Mjolnir  is made of metal from the heart of a dying ?",
        options: [
          { order: "A ", title: "Astrroid", isRight:false, isSelected: false },
          { order: "B", title: "Star", isRight: true, isSelected: false },
          { order: "C ", title: "God", isRight: false, isSelected: false },
          { order: "D ", title: "Black Hole", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "What is the name of villain in Ant man",
        options: [
          { order: "A ", title: "Yellow Jacket", isRight: true, isSelected: false },
          { order: "B", title: "Scorpian", isRight: false, isSelected: false },
          { order: "C ", title: "Hornet", isRight: false, isSelected: false },
          { order: "D ", title: "Serpent", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "What is the name of the document that regulates the activities of enahanced persons",
        options: [
          { order: "A ", title: "Stark Accords", isRight: false, isSelected: false },
          { order: "B", title: "Paris Accords", isRight: false, isSelected: false },
          { order: "C ", title: "Wakanda Accords", isRight: false, isSelected: false },
          { order: "D ", title: "Sokovia Accords", isRight: true, isSelected: false }
        ]
      },
      {
        question:
          "What is the name of the mother of Peter quil/Starlord",
        options: [
          { order: "A ", title: "Margaret", isRight: false, isSelected: false },
          { order: "B", title: "Meredith", isRight: true, isSelected: false },
          { order: "C ", title: "Matlida", isRight: false, isSelected: false },
          { order: "D ", title: "Madeline", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "How does Yondu control the Yaka Arrow",
        options: [
          { order: "A ", title: "With Telepathy", isRight: false, isSelected: false },
          { order: "B", title: "By his wrist", isRight: false, isSelected: false },
          { order: "C ", title: "By whislting", isRight: true, isSelected: false },
          { order: "D ", title: "By Winking", isRight: false, isSelected: false }
        ]
      }
      
    ]
  };

  const reactQuiz: Quiz = {
    name: "Marvel Quiz",
    questions: [
      {
        question:
          "Everything in React is a _____________",
        options: [
          { order: "A ", title: "Module", isRight: false , isSelected: false },
          { order: "B", title: "Component", isRight: true, isSelected: false },
          { order: "C ", title: "Package", isRight: false, isSelected: false },
          { order: "D ", title: "Class", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now ",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: " A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: " Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: " Ryzen", isRight: false, isSelected: false }
        ]
      },{
        question:
          "React quiz is under construction ,try other quizes for now 2 ",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 3 ",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 4",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 5",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 6",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 7",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 8",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      },
      {
        question:
          "React quiz is under construction ,try other quizes for now 9",
        options: [
          { order: "A ", title: "Apple M1", isRight: true, isSelected: false },
          { order: "B", title: "A14 bionic", isRight: false, isSelected: false },
          { order: "C ", title: "Apple Fusion", isRight: false, isSelected: false },
          { order: "D ", title: "Ryzen", isRight: false, isSelected: false }
        ]
      }
      
    ]
  };
export const data :Database={marvelQuiz,techQuiz,reactQuiz}
  
// export  techQuiz;
// Renoir is codename for AMD series of mainstream mobile and desktop APUs based on the Zen 2 CPU and Vega GPU microarchitectures succeeding Picasso. Renoir processors are fabricated on TSMC 7 nm process.