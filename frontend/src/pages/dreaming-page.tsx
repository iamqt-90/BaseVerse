import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DreamingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/user-dashboard");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gray-200 text-center text-base text-white font-inter relative">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#0e0037] to-[#08001d] shadow-md">
        <div className="max-w-screen-xl mx-auto h-[112.5px] flex items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-4">
            <div
              className="bg-white p-1 rounded-full cursor-pointer"
              onClick={onVectorIconClick}
            >
              <img
                className="h-6 w-6"
                alt="vector"
                src="/vector.svg"
              />
            </div>
            <div className="text-3xl font-semibold text-white text-left">
              DreamScape
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-[#2a00bd] to-[#00004a] rounded-2xl px-4 py-2 cursor-pointer text-white"
            onClick={onHomeTextClick}
          >
            Home
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-10 flex flex-col lg:flex-row gap-6">
        {/* Left Panel */}
        <div className="bg-plum rounded-3xl p-6 w-full lg:w-2/3 shadow-md">
          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <div className="bg-midnightblue-300 rounded-xl px-4 py-2 flex items-center gap-2">
              <img src="/vector1.svg" alt="text" />
              <span>Text</span>
            </div>
            <div className="bg-white text-gray-100 rounded-xl px-4 py-2 flex items-center gap-2">
              <img src="/frame9.svg" alt="audio" />
              <span>Audio</span>
            </div>
            <div className="bg-white text-gray-100 rounded-xl px-4 py-2 flex items-center gap-2">
              <img src="/frame10.svg" alt="sketch" />
              <span>Sketch</span>
            </div>
          </div>

          {/* Entry Box */}
          <div className="bg-lavender-100 rounded-2xl h-[600px] w-full mb-6"></div>

          {/* Save & Mint */}
          <div className="flex gap-4">
            <div className="bg-gradient-to-r from-[#2a00bd] to-[#00004a] text-white rounded-2xl px-6 py-3 shadow-md cursor-pointer">
              Save
            </div>
            <div className="bg-gradient-to-r from-[#2a00bd] to-[#00004a] text-white rounded-2xl px-6 py-3 shadow-md cursor-pointer">
              Mint NFT
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-plum rounded-3xl p-6 w-full lg:w-1/3 shadow-md">
          <div className="text-xl font-semibold text-gray-100 mb-4 text-left">
            Summary
          </div>
          <div className="bg-lavender-100 rounded-2xl p-6 h-[468px]">
            <p className="text-left text-dimgray">
              Save your entry to see summary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamingPage;
