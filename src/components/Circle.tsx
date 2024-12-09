
import React from "react";
import Image from "next/image";

const Circle= () => {
  const radius = 289.15; 
  const angles = [130, 165, 190, 220]; 

  const dimensions = [
    { width: 96.38, height: 99.19 }, 
    { width: 74.86, height: 68.31 }, 
    { width: 60.82, height: 54.27 },
    { width: 26, height: 22 },       
  ];

  return (
    <div className="relative w-[578.3px] h-[578.3px] border-2 border-white rounded-full mx-auto">
      {angles.map((angle, index) => {
        const radian = (angle * Math.PI) / 180; 
        const x = radius + radius * Math.cos(radian); 
        const y = radius - radius * Math.sin(radian); 
        return (
          <div
            key={index} 
            className="absolute"
            style={{
              top: `${y}px`,
              left: `${x}px`,
              transform: "translate(-50%, -50%)", 
            }}
          >
            <Image
              src={`/images/image${index + 1}.svg`} 
              alt={`Image at ${angle}°`}
              width={dimensions[index].width} 
              height={dimensions[index].height} 
           
            />
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
