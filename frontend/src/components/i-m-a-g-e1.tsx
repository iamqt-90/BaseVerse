import { FunctionComponent } from "react";

export type IMAGE1Type = {
  className?: string;
};

const IMAGE1: FunctionComponent<IMAGE1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[444px] rounded-24xl max-w-full h-[266px] bg-[url('/public/image2@2x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    />
  );
};

export default IMAGE1;
