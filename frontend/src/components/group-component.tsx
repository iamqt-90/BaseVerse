import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-[102px] text-left text-lg text-white font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0)] [background:radial-gradient(50%_50%_at_50%_50%,_#0e0037_42.31%,_#08001d)] w-[1440px] h-[102px]" />
      <b className="absolute top-[24px] left-[27px] text-17xl leading-[48px] inline-block font-archivo w-[225px] h-11 [text-shadow:1px_0_0_rgba(0,_0,_0,_0),_0_1px_0_rgba(0,_0,_0,_0),_-1px_0_0_rgba(0,_0,_0,_0),_0_-1px_0_rgba(0,_0,_0,_0)]">
        DreamScape
      </b>
      <b className="absolute top-[41px] left-[323px] leading-[24px] inline-block w-[52.1px] h-[21.7px]">
        Home
      </b>
      <div className="absolute top-[40.3px] left-[436.4px] leading-[24px] inline-block w-[60px] h-[21.7px]">
        Gallery
      </div>
      <div className="absolute top-[41.3px] left-[558.6px] leading-[24px] inline-block w-[55.5px] h-[21.7px]">
        Profile
      </div>
      <div className="absolute top-[42.3px] left-[1044.6px] leading-[24px] inline-block w-[94px] h-[21.7px]">
        Contact us
      </div>
      <div className="absolute top-[30.4px] left-[1193.8px] w-[217.8px] h-[43.3px] text-center text-base">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-midnightblue-200 w-[217.8px] h-[43.3px]" />
        <div className="absolute top-[9.6px] left-[48.2px] leading-[24px] font-semibold inline-block w-[119px] h-[22px]">
          <p className="m-0">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
