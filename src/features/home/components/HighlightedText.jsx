import React from "react";

function HighlightedText({ children }) {
  return (
    <div className="highlight-container">
      <span className="highlight">{children}</span>
    </div>
  );
}

export default HighlightedText;
