import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStartDreamingTextClick = useCallback(() => {
    navigate("/dreaming-page");
  }, [navigate]);

  const onViewTextClick = useCallback(() => {
    navigate("/nft-page-for-audio");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallary-page");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gray-200 text-left text-base-8 text-dimgray font-inter relative">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#0e0037] to-[#08001d] shadow-md">
        <div className="max-w-screen-xl mx-auto h-[102px] flex items-center px-6 sm:px-10">
          <img
            className="h-9 w-9 mr-4"
            alt=""
            src="/frame4.svg"
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
            onClick={onGalleryTextClick}
          >
            Gallery
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-start w-full py-10">
        <div className="w-full max-w-[1304px]">
          {/* Profile Card */}
          <div className="flex gap-6 items-center bg-plum rounded-lg-1 border border-aliceblue shadow-md px-8 py-8 mb-8">
            <img
              className="rounded-full w-[135.8px] h-[135.8px] object-cover"
              alt=""
              src="/image1@2x.png"
            />
            <div>
              <div className="text-[27.2px] leading-[40.8px] font-semibold text-gray-100 mb-1">
                Sam Jam
              </div>
              <div className="text-mid leading-[25.5px] text-darkslategray mb-4">
                Explorer of dreams and collector of magical moments. Join me on this journey through the dreamscape.
              </div>
              <button
                className="shadow-md rounded bg-midnightblue-300 border border-black text-white font-medium px-6 py-3"
                onClick={onStartDreamingTextClick}
              >
                Start Dreaming
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-6 mb-8">
            <div className="flex-1 bg-lavender-100 rounded shadow px-8 py-6 flex flex-col items-start">
              <div className="text-4xl font-semibold text-gray-100 mb-2">42</div>
              <div>Dreams Created</div>
            </div>
            <div className="flex-1 bg-lavender-100 rounded shadow px-8 py-6 flex flex-col items-start">
              <div className="text-4xl font-semibold text-gray-100 mb-2">156</div>
              <div>Dreams Bookmarked</div>
            </div>
            <div className="flex-1 bg-lavender-100 rounded shadow px-8 py-6 flex flex-col items-start">
              <div className="text-4xl font-semibold text-gray-100 mb-2">890</div>
              <div>Dream Tokens</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-mediumblue-100 mb-6">
            <div className="pb-2 border-b-2 border-mediumblue-100 font-medium text-mediumblue-100 text-center cursor-pointer">
              My Dreams
            </div>
            <div className="pb-2 font-medium text-center cursor-pointer">
              Bookmarked
            </div>
            <div className="pb-2 font-medium text-center cursor-pointer">
              Drafts
            </div>
          </div>

          {/* Dream Cards */}
          <div className="flex flex-wrap gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-aliceblue rounded-lg-1 shadow-md w-[440px] flex flex-col p-8 relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="rounded-full bg-aliceblue w-[60px] h-[56px]" />
                <div>
                  <div className="text-lg-1 font-semibold text-gray-100">Flying Over Mountains</div>
                  <div className="text-base text-dimgray">2024-02-15</div>
                </div>
              </div>
              <div className="text-mid text-darkslategray mb-4">
                Soaring through misty peaks at dawn, feeling weightless and free
              </div>
              <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                <button
                  className="bg-midnightblue-300 text-white rounded-3xs-1 px-5 py-2 font-medium text-center cursor-pointer"
                  onClick={onViewTextClick}
                >
                  View
                </button>
                <button className="border border-mediumblue-100 text-mediumblue-100 rounded-3xs-1 px-5 py-2 font-medium text-center">
                  Edit
                </button>
                <div className="ml-auto flex items-center">
                  <img className="w-7 h-7" alt="" src="/bookmark1.svg" />
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-aliceblue rounded-lg-1 shadow-md w-[440px] flex flex-col p-8 relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="rounded-full bg-lavenderblush w-[60px] h-[56px]" />
                <div>
                  <div className="text-lg-1 font-semibold text-gray-100">Crystal Garden</div>
                  <div className="text-base text-dimgray">2024-02-13</div>
                </div>
              </div>
              <div className="text-mid text-darkslategray mb-4">
                Walking through a garden where flowers were made of pure crystal
              </div>
              <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                <button className="bg-midnightblue-300 text-white rounded-3xs-1 px-5 py-2 font-medium text-center">
                  View
                </button>
                <button className="border border-mediumblue-100 text-mediumblue-100 rounded-3xs-1 px-5 py-2 font-medium text-center">
                  Edit
                </button>
                <div className="ml-auto flex items-center">
                  <img className="w-7 h-7" alt="" src="/bookmark.svg" />
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-aliceblue rounded-lg-1 shadow-md w-[440px] flex flex-col p-8 relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="rounded-full bg-honeydew w-[60px] h-[56px]" />
                <div>
                  <div className="text-lg-1 font-semibold text-gray-100">Ocean Depths</div>
                  <div className="text-base text-dimgray">2024-02-14</div>
                </div>
              </div>
              <div className="text-mid text-darkslategray mb-4">
                Exploring luminescent caves beneath the sea, discovering ancient ruins
              </div>
              <div className="border-t border-aliceblue mt-auto pt-4 flex gap-2">
                <button className="bg-midnightblue-300 text-white rounded-3xs-1 px-5 py-2 font-medium text-center">
                  View
                </button>
                <button className="border border-mediumblue-100 text-mediumblue-100 rounded-3xs-1 px-5 py-2 font-medium text-center">
                  Edit
                </button>
                <div className="ml-auto flex items-center">
                  <img className="w-7 h-7" alt="" src="/bookmark.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
