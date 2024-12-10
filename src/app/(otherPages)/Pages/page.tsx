import React, { useState } from "react";

const CardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => setIsOpen(!isOpen);

  return (
    <div
      className="max-w-[40.5rem] h-[10.625rem] border shadow-lg flex items-center justify-center"
      style={{ width: "40.5rem", height: "10.625rem" }}
    >
      {/* Inner Card */}
      <div
        className="w-[37.5rem] h-[7.625rem] border bg-gray-100 flex flex-col justify-between p-4"
        style={{ width: "37.5rem", height: "7.625rem" }}
      >
        {/* First Div: Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[1.25rem] font-bold">Title</h1>
          <button
            onClick={toggleIcon}
            className="text-[1.25rem] font-bold text-gray-600 hover:text-black"
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>

        {/* Second Div: Paragraph */}
        <div>
          <p className="text-[0.875rem] text-gray-600">
            This is the content of the card. It provides additional information or details about the title.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
