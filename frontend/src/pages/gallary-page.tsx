import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GallaryPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSamJamTextClick = useCallback(() => {
    navigate("/user-dashboard");
  }, [navigate]);

  const onViewTextClick = useCallback(() => {
    navigate("/nft-page-for-audio");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gray-200 text-base text-dimgray font-inter relative">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#0e0037] to-[#08001d] shadow-md">
        <div className="max-w-screen-xl mx-auto h-[102px] flex items-center px-6 sm:px-10">
          <img
            className="h-9 w-9 mr-4"
            alt=""
            src="/frame15.svg"
          />
          <b className="text-5xl font-archivo text-white mr-12">DreamScape</b>
          <b
            className="text-lg text-white cursor-pointer mx-8"
            onClick={onHomeTextClick}
          >
            Home
          </b>
          <div
            className="text-lg text-white cursor-pointer mx-8"
            onClick={onSamJamTextClick}
          >
            Profile
          </div>
          <div className="flex items-center ml-auto">
            <img
              className="rounded-full w-[45px] h-[43px] object-cover ml-8"
              alt=""
              src="/image5@2x.png"
            />
            <div
              className="text-base text-white font-medium cursor-pointer ml-4"
              onClick={onSamJamTextClick}
            >
              Sam Jam
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-start w-full py-10">
        <div className="w-full max-w-[1304px] flex gap-8">
          {/* Sidebar Filters */}
          <div className="flex flex-col gap-6 w-[340px]">
            {/* Search */}
            <div className="bg-lavender-100 rounded-2xl border border-aliceblue shadow px-6 py-4 mb-2">
              <span className="text-base text-darkgray">Search dreams...</span>
            </div>
            {/* Filter by Type */}
            <div className="bg-lavender-100 rounded-2xl border border-aliceblue shadow px-6 py-6">
              <div className="font-semibold text-dimgray mb-4">FILTER BY TYPE</div>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl bg-plum px-4 py-3 text-mediumblue-100 cursor-pointer">Audio Dreams</div>
                <div className="rounded-xl bg-plum px-4 py-3 text-mediumblue-100 cursor-pointer">Text Dreams</div>
                <div className="rounded-xl bg-plum px-4 py-3 text-mediumblue-100 cursor-pointer">Sketch Dreams</div>
              </div>
            </div>
            {/* Sort By */}
            <div className="bg-lavender-100 rounded-2xl border border-aliceblue shadow px-6 py-6">
              <div className="font-semibold text-dimgray mb-4">SORT BY</div>
              <div className="rounded-xl bg-plum px-4 py-3 text-black cursor-pointer">Newest First</div>
            </div>
          </div>

          {/* Gallery Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div className="text-5xl font-semibold text-white">Dream Gallery</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-mediumblue-200 rounded-xl shadow px-6 py-3 cursor-pointer ml-8">
                  <img src="/frame17.svg" className="w-6 h-6 mr-2" alt="new" />
                  <span className="text-base text-white">New Dream Entry</span>
                </div>
              </div>
            </div>
            {/* Dream Cards Grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-aliceblue w-[45px] h-[43px]" />
                  <img src="/frame18.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Flying Over Mountains</div>
                    <div className="text-base text-dimgray">2024-02-15</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Soaring through misty peaks at dawn, feeling weightless and free
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button
                    className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center cursor-pointer"
                    onClick={onViewTextClick}
                  >
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame19.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-lavenderblush w-[45px] h-[43px]" />
                  <img src="/frame20.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Ocean Depths</div>
                    <div className="text-base text-dimgray">2024-02-14</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Exploring luminescent caves beneath the sea, discovering ancient ruins
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame21.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-honeydew w-[45px] h-[43px]" />
                  <img src="/frame22.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Crystal Garden</div>
                    <div className="text-base text-dimgray">2024-02-13</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Walking through a garden where flowers were made of pure crystal
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame23.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-lavenderblush w-[45px] h-[43px]" />
                  <img src="/frame24.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Time Travel</div>
                    <div className="text-base text-dimgray">2024-02-12</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Found myself in ancient Egypt, watching the pyramids being built
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame25.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 5 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-aliceblue w-[45px] h-[43px]" />
                  <img src="/frame26.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Starship Journey</div>
                    <div className="text-base text-dimgray">2024-02-11</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Piloting a vessel through a nebula of swirling colors
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame27.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 6 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-honeydew w-[45px] h-[43px]" />
                  <img src="/frame28.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Forest of Whispers</div>
                    <div className="text-base text-dimgray">2024-02-10</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Trees that communicated through glowing symbols
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame29.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 7 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-lavenderblush w-[45px] h-[43px]" />
                  <img src="/frame30.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Desert Oasis</div>
                    <div className="text-base text-dimgray">2024-02-09</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Found a magical pool of water surrounded by floating crystals
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame31.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 8 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-honeydew w-[45px] h-[43px]" />
                  <img src="/frame32.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Cloud City</div>
                    <div className="text-base text-dimgray">2024-02-08</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Walking through a city built on clouds with rainbow bridges
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame33.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
              {/* Card 9 */}
              <div className="bg-lavender-100 border border-aliceblue rounded-2xl shadow-md flex flex-col p-6 relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-full bg-aliceblue w-[45px] h-[43px]" />
                  <img src="/frame34.svg" className="w-6 h-6" alt="" />
                  <div>
                    <div className="text-lg font-semibold text-gray-100">Underwater Concert</div>
                    <div className="text-base text-dimgray">2024-02-07</div>
                  </div>
                </div>
                <div className="text-mini text-darkslategray mb-4">
                  Listening to whale songs in an underwater amphitheater
                </div>
                <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                  <button className="bg-midnightblue-300 text-white rounded-lg px-4 py-2 font-medium text-center">
                    View
                  </button>
                  <button className="border border-mediumblue-100 text-mediumblue-100 rounded-lg px-4 py-2 font-medium text-center">
                    Edit
                  </button>
                  <button className="border border-orangered text-orangered rounded-lg px-4 py-2 font-medium text-center ml-auto">
                    <img src="/frame35.svg" className="w-5 h-5" alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryPage;
