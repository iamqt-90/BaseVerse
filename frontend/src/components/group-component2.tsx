import { FunctionComponent } from "react";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[545px] left-[1030.6px] w-[341.3px] h-[128.2px] text-left text-xs text-mediumblue-100 font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.03),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0)] rounded-2xl bg-white border-aliceblue border-solid border-[1px] box-border w-[341.3px] h-[128.2px]" />
      <div className="absolute top-[27.9px] left-[28.5px] text-sm leading-[21px] font-semibold text-dimgray inline-block w-[127.4px] h-[23.4px]">
        EMOTIONS FELT
      </div>
      <div className="absolute top-[69.1px] left-[28.5px] rounded-sm bg-ghostwhite w-[76.2px] h-[31.2px]" />
      <div className="absolute top-[73.5px] left-[42.1px] leading-[18px] inline-block w-[48.9px] h-[20.1px]">
        wonder
      </div>
      <div className="absolute top-[69.1px] left-[113.8px] rounded-sm bg-ghostwhite w-[67.1px] h-[31.2px]" />
      <div className="absolute top-[73.5px] left-[127.5px] leading-[18px] inline-block w-[39.8px] h-[20.1px]">
        peace
      </div>
      <div className="absolute top-[69.1px] left-[190px] rounded-sm bg-ghostwhite w-[83px] h-[31.2px]" />
      <div className="absolute top-[73.5px] left-[203.7px] leading-[18px] inline-block w-[55.7px] h-[20.1px]">
        curiosity
      </div>
    </div>
  );
};

export default GroupComponent2;
