import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StrictMode } from "react";
import { fork } from "effector";
import { YMapComponentsProvider } from "ymap3-components";
import "simplebar-react/dist/simplebar.min.css";
import "react-toastify/dist/ReactToastify.css";

fork();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <YMapComponentsProvider
      apiKey={"d6e198c0-c3c3-422a-86c9-e0ff581ecc64"}
      lang="en_EN"
    >
      <App />
    </YMapComponentsProvider>
  </StrictMode>,
);
