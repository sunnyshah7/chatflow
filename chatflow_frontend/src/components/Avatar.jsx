import React from "react";
export default function Avatar({letter="?", online=false, size="medium"}) {
  return <div className={`avatar ${size}`}>
    <span>{letter}</span>{online && <i className="online-dot" />}
  </div>;
}