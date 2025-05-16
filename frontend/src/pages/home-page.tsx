import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/dreaming-page");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallary-page");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/user-dashboard");
  }, [navigate]);

  const onConnectWalletTextClick = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#00004a] to-black text-left text-lg text-white font-inter relative overflow-x-hidden">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#0e0037] to-[#08001d] shadow-md">
        <div className="max-w-screen-xl mx-auto h-[102px] flex items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-semibold font-archivo text-white">
              DreamScape
            </div>
            <b
              className="ml-8 leading-[24px] cursor-pointer"
              onClick={onHomeTextClick}
            >
              Home
            </b>
            <div
              className="ml-6 leading-[24px] cursor-pointer"
              onClick={onGalleryTextClick}
            >
              Gallery
            </div>
            <div
              className="ml-6 leading-[24px] cursor-pointer"
              onClick={onProfileTextClick}
            >
              Profile
            </div>
            <div className="ml-6 leading-[24px]">
              Contact us
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-midnightblue-200 px-6 py-2">
              <div
                className="text-base font-semibold text-center cursor-pointer"
                onClick={onConnectWalletTextClick}
              >
                Connect Wallet
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center pt-12 pb-0">
        <div className="relative w-full max-w-screen-xl" style={{ height: "542px" }}>
          <img
            className="w-full h-[542px] object-cover rounded-3xl"
            alt=""
            src="/rectangle@2x.png"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <b className="text-[3.5rem] md:text-[5.5rem] leading-tight font-archivo text-center block max-w-4xl drop-shadow-lg">
              Record your dreams & mint them!
            </b>
            <div className="mt-6 text-2xl leading-[36px] text-center max-w-2xl drop-shadow-lg">
              Transform your story into digital collectibles and explore a gallery of imagination.
            </div>
            <div
              className="mt-10 bg-midnightblue-400 rounded-lg px-10 py-4 cursor-pointer text-xl font-semibold text-center shadow-md"
              onClick={onGroupContainerClick}
            >
              Start Dreaming
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 mb-8 max-w-screen-xl mx-auto">
        <img
          className="rounded-3xl w-[444px] h-[266px] object-cover"
          alt=""
          src="/image2@2x.png"
        />
        <img
          className="rounded-3xl w-[454px] h-[266px] object-cover"
          alt=""
          src="/image3@2x.png"
        />
        <img
          className="rounded-3xl w-[444px] h-[266px] object-cover"
          alt=""
          src="/image2@2x.png"
        />
      </div>
    </div>
  );
};

export default HomePage;
