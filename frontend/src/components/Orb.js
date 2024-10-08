// src/components/Orb.js

import React from "react";
import "./Orb.scss";

const Orb = () => (
  <div className="wrap">
    {Array.from({ length: 300 }).map((_, i) => (
      <div key={i} className="particle"></div>
    ))}
  </div>
);

export default Orb;