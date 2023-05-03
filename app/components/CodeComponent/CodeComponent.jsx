"use client";
import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";

const CodeComponent = ({ code }) => {
  const preRef = useRef(null);

  useEffect(() => {
    try {
      hljs.highlightBlock(preRef.current);
    } catch (error) {
      console.error(error);
    }
  }, [code]);

  const renderers = {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <pre className={`hljs ${match[1]}`} ref={preRef} {...props}>
          <code>{children}</code>
        </pre>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="code-container">
      <ReactMarkdown children={code} renderers={renderers} />
    </div>
  );
};

export default CodeComponent;
