import { FunctionComponent } from "react";

export type IMAGE2Type = {
  className?: string;
};

const IMAGE2: FunctionComponent<IMAGE2Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] max-w-full h-[542px] bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top] hidden ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image6@2x.png"
      />
    </div>
  );
};

export default IMAGE2;
