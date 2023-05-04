"use client";
import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

function CodeHighlighter({ code, language }) {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, [code]);

  return (
    <pre>
      <code className={language}>{code}</code>
    </pre>
  );
}

export default CodeHighlighter;
