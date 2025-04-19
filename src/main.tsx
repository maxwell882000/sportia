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
      apiKey={"d19c6c61-99a0-4d7c-9a58-0b70ea211493"}
      lang="en_EN"
    >
      <App />
    </YMapComponentsProvider>
  </StrictMode>,
);
