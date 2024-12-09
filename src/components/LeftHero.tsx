import React from "react";
import MainPara from "./MainPara";
import Button from "./Button";
import KingPara from "./KingPara";
import Heding from "./Heding";

const LeftHero = () => {
  return (

<div className="flex flex-col justify-start  items-start w-[472px]">
      {/* "Its Quick & Amusing!" */}
      <KingPara text=" Its Quick & Amusing!"/>

      {/* "The Art of Speed" */}
    <Heding
    ptext="Th"
    text="e Art of Speed"
   
    tgtext=" food Quilty"
    />

      {/* Paragraph */}
    <MainPara text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  " +
       
        "Varius sed pharetra dictum neque massa congue"}/>

      {/* Button */}
     <Button
     text="See Menu"
     />
    </div>

  
  );
};

export default LeftHero;
