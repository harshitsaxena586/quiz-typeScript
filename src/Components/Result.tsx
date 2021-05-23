import React from 'react'
import { useApp } from '../Context/AppContextProvider'
import { Link } from "react-router-dom";


export default function Result() {
    const {state}= useApp()
    return (
        <div className="result-wrap">
                <img src="https://ik.imagekit.io/harshit/Trophy_m3wbPjOBF.svg" alt="trophy"/>
                <h1>Congratulations </h1>
                <h2>Score {state.score}</h2>
                <h2>Streak {state.streak}</h2>
                <Link to="/review">
              <div className="cta">
                <h4>Review</h4>
                <img
                  className="arrow-right"
                  src="https://ik.imagekit.io/harshit/up-arrow_1_B9GoooNA9NK.svg"
                  alt="arrow"
                />
              </div>
            </Link>
        </div>
    )
}
