import Search from "../components/search/Search.tsx";
import {useUnit} from "effector-react";
import {$currentPage, $isCategoriesDisappeared} from "../states/store.ts";
import MainPage from "./MainPage.tsx";

function AllPages() {
    const [isCategoriesDisappeared, currentPage] = useUnit([$isCategoriesDisappeared, $currentPage]);

    return <>
        <div className={`order-3 relative animate-search ${!isCategoriesDisappeared ? "top-0" : "top-[-3.25rem]"}`}>
            <Search/>
        </div>
        <MainPage className={"animate-page"} />
    </>
}

export default AllPages
