import React from "react";

const ProgressBar = ({ selectedTab }) => (
  <div className="flex justify-between">
    <div className="w-full h-2 bg-gray-200 rounded-lg relative">
      <div
        className="h-full bg-pink-500 rounded-lg absolute left-0"
        style={{
          width:
            selectedTab === "personal"
              ? "33%"
              : selectedTab === "educational"
              ? "66%"
              : "100%",
        }}
      ></div>
    </div>
  </div>
);

export default ProgressBar;
