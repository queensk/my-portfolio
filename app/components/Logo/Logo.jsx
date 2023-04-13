"use client";
import React, { useState, useEffect, FC } from "react";
import Image from "next/image";

const logos = ["/svg59.svg"];
const logosIndex = [
  3, 4, 5, 7, 8, 16, 18, 27, 29, 31, 33, 35, 37, 39, 40, 43, 46, 48, 51, 54,
];

const useLogoIndex = (interval) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logosIndex.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  return index;
};

const Log = () => {
  const index = useLogoIndex(5000);
  return (
    <Image
      src={`/svg${logosIndex[index]}.svg`}
      alt="Logo"
      width={100}
      height={60}
      priority
    />
  );
};

export default Log;
