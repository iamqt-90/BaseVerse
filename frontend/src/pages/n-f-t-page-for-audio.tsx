import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NFTPageForAudio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackToGalleryClick = useCallback(() => {
    navigate("/gallary-page");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gray-200 text-base text-dimgray font-inter relative">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#0e0037] to-[#08001d] shadow-md">
        <div className="max-w-screen-xl mx-auto h-[102px] flex items-center px-6 sm:px-10">
          <img
            className="h-9 w-9 mr-4"
            alt=""
            src="/frame4.svg"
          />
          <b className="text-5xl font-archivo text-white mr-12">DreamScape</b>
          <div
            className="text-lg text-white cursor-pointer mx-8"
            onClick={onBackToGalleryClick}
          >
            Back to Gallery
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-start w-full py-10">
        <div className="w-full max-w-[1304px] flex gap-8">
          {/* Left Panel */}
          <div className="bg-white border border-aliceblue rounded-lg-1 shadow-md flex-1 min-w-[600px] max-w-[800px] p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-aliceblue w-[60px] h-[56px]" />
              <div>
                <div className="text-3xl font-semibold text-gray-100">Flying Over Mountains</div>
                <div className="text-lightgray text-base mt-1">Thursday, February 15, 2024</div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex gap-3 mb-4">
              <div className="rounded bg-ghostwhite px-4 py-1 text-xs text-mediumblue-100">flying</div>
              <div className="rounded bg-ghostwhite px-4 py-1 text-xs text-mediumblue-100">mountains</div>
              <div className="rounded bg-ghostwhite px-4 py-1 text-xs text-mediumblue-100">freedom</div>
              <div className="rounded bg-ghostwhite px-4 py-1 text-xs text-mediumblue-100">nature</div>
            </div>
            {/* Audio Player */}
            <div className="relative rounded-xl bg-ghostwhite w-full h-[120px] mb-6">
              {/* Play button */}
              <div className="absolute top-1/2 left-8 -translate-y-1/2 rounded-lg bg-midnightblue-300 w-[48px] h-[50px] flex items-center justify-center">
                <img className="w-6 h-6" alt="" src="/vector5.svg" />
              </div>
              {/* Time and Add Timestamp */}
              <div className="absolute top-6 left-[120px] right-8 flex justify-between items-center">
                <span className="text-base">00:00 / 2:30</span>
                <span className="text-mediumblue-100 cursor-pointer">Add Timestamp</span>
              </div>
              {/* Progress Bar */}
              <div className="absolute left-[120px] right-8 top-[56px] bg-lavender-300 rounded-sm h-[5px]" />
              {/* Timestamps */}
              <div className="absolute left-[120px] right-8 top-[72px] flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <span className="text-mediumblue-100 text-xs">0:15</span>
                  <span className="text-xs">Initial takeoff sensation</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-mediumblue-100 text-xs">0:45</span>
                  <span className="text-xs">Mountain peak encounter</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-mediumblue-100 text-xs">1:30</span>
                  <span className="text-xs">Wind current description</span>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="font-semibold text-gray-100 text-lg mb-2">Dream Description</div>
            <div className="text-mini text-darkslategray mb-6">
              Soaring through misty peaks at dawn, feeling weightless and free as I
              glided between ancient mountain ranges. The air was crisp and clear,
              carrying whispers of ancient stories through the clouds. The mountains
              stretched endlessly beneath me, their snow-capped peaks glowing in the
              early morning light. I could feel every subtle air current, every shift
              in the wind, as if the sky itself was teaching me how to fly.
            </div>
            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button className="rounded-lg bg-midnightblue-300 border border-mediumblue-100 text-white font-medium px-6 py-3">
                Edit Dream
              </button>
              <button className="rounded-lg border border-orangered text-orangered font-medium px-6 py-3">
                Delete Dream
              </button>
            </div>
          </div>
          {/* Right Panel */}
          <div className="bg-white border border-aliceblue rounded-lg-1 shadow-md w-[344px] min-h-[488px] p-8 flex flex-col">
            <div className="font-semibold text-gray-100 mb-4">DREAM DETAILS</div>
            <div className="mb-2">
              <div className="text-xs mb-1">Dream Type</div>
              <div className="text-gray-100 mb-2">Audio Recording</div>
              <div className="text-xs mb-1">Duration</div>
              <div className="text-gray-100 mb-2">2:30</div>
              <div className="text-xs mb-1">Mood</div>
              <div className="text-gray-100 mb-2">Peaceful</div>
              <div className="text-xs mb-1">Lucidity</div>
              <div className="text-gray-100 mb-2">Semi-lucid</div>
            </div>
            <div className="font-semibold text-gray-100 mt-4 mb-2">DREAM SUMMARY</div>
            <div className="text-darkslategray mb-6">
              A vivid flying dream featuring mountain landscapes and sensations of freedom
            </div>
            {/* Share/Mint Buttons */}
            <div className="flex flex-col gap-4 mt-auto">
              <button className="bg-mediumblue-200 text-white rounded-2xl px-6 py-3 font-medium shadow">
                Share Dream
              </button>
              <button className="bg-mediumblue-200 text-white rounded-2xl px-6 py-3 font-medium shadow">
                Mint as NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPageForAudio;
