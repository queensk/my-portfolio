import React from "react";
import "./WordAnimator.css";

function WordAnimator({ word }) {
  const words = word.split(" ");

  return (
    <div className="wave-container">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className="wavy">
            {word.split("").map((letter, index) => (
              <span key={index} style={{ "--i": index + 1 }}>
                {letter}
              </span>
            ))}
          </span>
          /* eslint react/no-unescaped-entities */
          {index < words.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WordAnimator;
