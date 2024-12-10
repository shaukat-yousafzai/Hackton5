import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto px-4 py-4 sm:px-6 lg:px-8 overflow-hidden max-w-full md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
