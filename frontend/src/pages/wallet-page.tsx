import { FunctionComponent } from "react";
import GroupComponent from "../components/group-component";
import Wallet from "../components/wallet";

const WalletPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-center text-51xl text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-lavender-200 w-[1440px] h-[1024px]" />
      <div className="absolute top-[0px] left-[0px] [filter:blur(10px)] w-[1440px] h-[1024px]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#00004a_47.12%,_#000)] w-[1440px] h-[1024px]" />
        <img
          className="absolute top-[102px] left-[0px] w-[1440px] h-[542px] object-cover"
          alt=""
          src="/rectangle@2x.png"
        />
        <b className="absolute top-[228.6px] left-[167.7px] leading-[96px] inline-block font-archivo w-[1141.1px] h-[86.7px]">{`Record your dreams & mint them!`}</b>
        <div className="absolute top-[336.7px] left-[284.2px] text-5xl leading-[36px] inline-block w-[872.8px] h-[65px]">
          Transform your story into digital collectibles and explore a gallery
          of imagination.
        </div>
        <div className="absolute top-[447px] left-[572px] w-[281px] h-[58px] text-xl">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-midnightblue-400 w-[281px] h-[58px]" />
          <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_71.5px)] leading-[27px] font-semibold inline-block w-[149.4px] h-[24.4px]">
            Start Dreaming
          </div>
        </div>
        <img
          className="absolute top-[686px] left-[22px] rounded-24xl w-[444px] h-[266px] object-cover"
          alt=""
          src="/image2@2x.png"
        />
        <img
          className="absolute top-[686px] left-[977px] rounded-24xl w-[444px] h-[266px] object-cover"
          alt=""
          src="/image2@2x.png"
        />
        <img
          className="absolute top-[686px] left-[497px] rounded-24xl w-[454px] h-[266px] object-cover"
          alt=""
          src="/image3@2x.png"
        />
        <GroupComponent />
      </div>
      <Wallet />
    </div>
  );
};

export default WalletPage;
