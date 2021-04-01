import React from "react";

export default function SidebarItem({ active, content, biIcon }) {
  return (
    <div
      className={`relative font-lato text-lg cursor-pointer ${
        active ? "text-brand-blue font-bold" : "text-gray-700"
      }`}
    >
      {active && (
        <div className="absolute w-32 h-full -left-11 rounded-full bg-blue-100" />
      )}
      <div className="flex items-center px-10 py-3 my-4 relative">
        <i
          className={`text-3xl inline-block ${biIcon}`}
          style={{
            minWidth: "50px",
          }}
        ></i>{" "}
        {content}
      </div>
    </div>
  );
}
