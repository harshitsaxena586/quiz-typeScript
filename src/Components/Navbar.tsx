import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/">
            <img src="https://ik.imagekit.io/harshit/Logo_dIC5bVSB4.svg" alt="logo" />
          </a>
        </div>
        <div>
          <ul className="list-tag">
            <li>
              <a href="/">Home</a>{" "}
            </li>
            <li>
              <a href="https://twitter.com/harshitsaxena_">Stats</a>
            </li>
            <li>
              <a href="https://twitter.com/harshitsaxena_">Twitter</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
