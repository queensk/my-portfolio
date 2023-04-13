import React from "react";
import { saveAs } from "file-saver";

export default function DownloadCV({ className, link }) {
  const saveFile = () => {
    saveAs(link, "QueensKisivuliCV.pdf");
  };
  return (
    <button className={className} onClick={saveFile}>
      Download CV
    </button>
  );
}
