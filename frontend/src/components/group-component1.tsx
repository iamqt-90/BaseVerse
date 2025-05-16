import { FunctionComponent } from "react";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[124.8px] left-[1039.7px] w-[341.3px] h-[393.4px] text-left text-sm text-gray-100 font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.03),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0)] rounded-2xl bg-white border-aliceblue border-solid border-[1px] box-border w-[341.3px] h-[393.4px]" />
      <div className="absolute top-[26.8px] left-[28.5px] leading-[21px] font-semibold text-dimgray inline-block w-[127.4px] h-[23.4px]">
        DREAM DETAILS
      </div>
      <div className="absolute top-[68px] left-[28.5px] text-xs leading-[18px] text-dimgray inline-block w-[87.6px] h-[20.1px]">
        Time of Night
      </div>
      <div className="absolute top-[92.5px] left-[28.5px] leading-[21px] inline-block w-[61.4px] h-[23.4px]">
        3:15 AM
      </div>
      <div className="absolute top-[133.8px] left-[28.5px] text-xs leading-[18px] text-dimgray inline-block w-[85.3px] h-[20.1px]">
        Sleep Quality
      </div>
      <div className="absolute top-[158.3px] left-[28.5px] leading-[21px] inline-block w-[39.8px] h-[23.4px]">
        Deep
      </div>
      <div className="absolute top-[199.5px] left-[28.5px] text-xs leading-[18px] text-dimgray inline-block w-[81.9px] h-[20.1px]">
        Dream Signs
      </div>
      <div className="absolute top-[224px] left-[28.5px] leading-[21px] inline-block w-[101.2px] h-[23.4px]">
        glowing trees
      </div>
      <div className="absolute top-[224px] left-[134.3px] leading-[21px] inline-block w-[121.7px] h-[23.4px]">
        floating lanterns
      </div>
      <div className="absolute top-[251.9px] left-[28.5px] leading-[21px] inline-block w-[129.7px] h-[23.4px]">
        speaking animals
      </div>
      <div className="absolute top-[293.1px] left-[28.5px] text-xs leading-[18px] text-dimgray inline-block w-[108.1px] h-[20.1px]">
        Recurring Dream
      </div>
      <div className="absolute top-[317.7px] left-[28.5px] leading-[21px] inline-block w-[147.9px] h-[23.4px]">
        Yes - Last occurred
      </div>
      <div className="absolute top-[319.9px] left-[28.5px] leading-[21px] inline-block w-[223px] h-[23.4px]">
        Saturday, January 20, 2024
      </div>
    </div>
  );
};

export default GroupComponent1;
