import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import SketchNFT from "./pages/sketch-n-f-t";
import UserDashboard from "./pages/user-dashboard";
import DreamingPage from "./pages/dreaming-page";
import WalletPage from "./pages/wallet-page";
import TextNFT from "./pages/text-n-f-t";
import GallaryPage from "./pages/gallary-page";
import NFTPageForAudio from "./pages/n-f-t-page-for-audio";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sketch-nft":
        title = "";
        metaDescription = "";
        break;
      case "/user-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dreaming-page":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-page":
        title = "";
        metaDescription = "";
        break;
      case "/text-nft":
        title = "";
        metaDescription = "";
        break;
      case "/gallary-page":
        title = "";
        metaDescription = "";
        break;
      case "/nft-page-for-audio":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sketch-nft" element={<SketchNFT />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/dreaming-page" element={<DreamingPage />} />
      <Route path="/wallet-page" element={<WalletPage />} />
      <Route path="/text-nft" element={<TextNFT />} />
      <Route path="/gallary-page" element={<GallaryPage />} />
      <Route path="/nft-page-for-audio" element={<NFTPageForAudio />} />
    </Routes>
  );
}
export default App;
