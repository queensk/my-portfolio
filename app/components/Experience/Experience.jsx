import React from "react";

export default function Experience({
  className,
  Header,
  experience,
  time,
  icon,
}) {
  return (
    <div className={className}>
      {icon}
      <h3>{Header}</h3>
      <p>
        {time}+ years
        <br />
        {experience}
      </p>
    </div>
  );
}
