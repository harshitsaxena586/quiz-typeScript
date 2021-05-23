import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "../Context/AppContextProvider";

export default function Home() {
  const { dispatch } = useApp();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  useEffect(() => dispatch({ type: "CLEAR" }), []);
  return (
    <div className="hero-bg">
      <div className="hero">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={variants}
          className="text-center heading-wrap"
        >
          <img src="https://ik.imagekit.io/harshit/Quiz-hero_ni7s-ugEr.png"  alt="bored" className="hero-img"/>
          <h2>Bored with College Assignments or Git commits ?</h2>
          <h1>Refresh Yourself by playing Quizzes </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 2.1 }}
          variants={variants}
          className="list-tag cards-wrap"
        >
          <motion.div className="card-primary">
            <h3 className="text-center">Marvel Quiz</h3>
            <p>
              Answer a series of 15 questions based on the Marvel Comic Universe{" "}
            </p>
            <Link to="quiz/marvel">
              <div className="cta">
                <h4>Are You really a nerd ?</h4>
                <img
                  className="arrow-right"
                  src="https://ik.imagekit.io/harshit/up-arrow_1_B9GoooNA9NK.svg"
                  alt="arrow"
                />
              </div>
            </Link>
          </motion.div>
          <div className="card-primary">
            <h3 className="text-center">Tech Quiz</h3>
            <p>
              Do you watch every product launch related to tech ?
              Lets see if you really remeber anything !{" "}
            </p>
            <Link to="quiz/tech">
              <div className="cta">
                <h4>Ready to overclock brain ?</h4>
                <img
                  className="arrow-right"
                  src="https://ik.imagekit.io/harshit/up-arrow_1_B9GoooNA9NK.svg"
                  alt="arrow"
                />
              </div>
            </Link>
          </div>
          <div className="card-primary">
            <h3 className="text-center">React Quiz</h3>
            <p>
             Are You also learning react,well me too ,lets see how good you are with react{" "}
            </p>
            <Link to="quiz/react">
              <div className="cta">
                <h4>{"npx create-react-quiz ."}</h4>
                <img
                  className="arrow-right"
                  src="https://ik.imagekit.io/harshit/up-arrow_1_B9GoooNA9NK.svg"
                  alt="arrow"
                />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
