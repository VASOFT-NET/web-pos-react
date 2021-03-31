import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="flex">
        <div className="bubble yellow"></div>
        <div className="bubble red"></div>
        <div className="bubble blue"></div>
        <div className="bubble violet"></div>
      </div>
      <h3 className="pt-6 font-nunito font-bold text-2xl">LOADING</h3>
    </div>
  );
}
