import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {StrictMode} from "react";
import {fork} from "effector";
import {YMapComponentsProvider} from "ymap3-components";

fork()
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <YMapComponentsProvider apiKey={"d6e198c0-c3c3-422a-86c9-e0ff581ecc64"} lang="en_EN">
            <App/>
        </YMapComponentsProvider>
    </StrictMode>
)
