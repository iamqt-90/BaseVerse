import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type WalletType = {
  className?: string;
};

const Wallet: FunctionComponent<WalletType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[261px] left-[422px] w-[597px] h-[503px] text-center text-sm text-white font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[597px] h-[503px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.82)] rounded-2xl bg-midnightblue-100 w-[597px] h-[503px]" />
      </div>
      <img
        className="absolute top-[42.5px] left-[192.7px] w-[44.8px] h-[43.7px] overflow-hidden"
        alt=""
        src="/frame11.svg"
      />
      <div className="absolute top-[49px] left-[243px] text-xl leading-[30px] font-semibold text-left inline-block w-[154.1px] h-[38.6px]">
        DreamScape
      </div>
      <div className="absolute top-[125px] left-[181px] text-5xl leading-[36px] font-semibold text-left inline-block w-[242px] h-[46px]">
        Connect Your Wallet
      </div>
      <div className="absolute top-[195.6px] left-[78.3px] text-mini leading-[22.5px] text-gainsboro inline-block w-[440.1px] h-[57.9px]">
        Choose your preferred wallet to connect and start managing your dreams
      </div>
      <div className="absolute top-[291px] left-[45px] w-[514.7px] h-[84.9px] text-base text-gray-100">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-plum border-aliceblue border-solid border-[1px] box-border w-[514.7px] h-[84.9px]" />
        <img
          className="absolute top-[21.9px] left-[21.1px] rounded-lg w-[39.8px] h-[41.2px] object-cover"
          alt=""
          src="/image4@2x.png"
        />
        <div className="absolute top-[27px] left-[75.8px] leading-[24px] font-medium inline-block w-[154.1px] h-[30.9px]">
          Coinbase Wallet
        </div>
        <img
          className="absolute top-[29.6px] left-[468.7px] w-[24.9px] h-[25.7px] overflow-hidden"
          alt=""
          src="/frame12.svg"
        />
      </div>
      <div className="absolute top-[454px] left-[169px] leading-[21px] text-gainsboro inline-block w-[120.6px] h-[27px]">
        New to Web3?
      </div>
      <div className="absolute top-[452px] left-[316px] leading-[21px] font-medium text-mediumslateblue inline-block w-[94.5px] h-[27px]">
        Learn More
      </div>
      <img
        className="absolute h-[3.26%] w-[3.42%] top-[3.78%] right-[92.06%] bottom-[92.96%] left-[4.52%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default Wallet;
