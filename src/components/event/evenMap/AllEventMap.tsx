import { YMapMarker } from "ymap3-components";
import Football from "../../Icons/Football.tsx";

function AllEventMap() {
  return (
    <>
      <YMapMarker onClick={() => {}} coordinates={[69.2, 41.2]}>
        <div className={"relative flex flex-row items-center"}>
          <div>
            <div
              className={
                "relative left-[50%] min-w-min rounded-[50%] border-2 border-[#FFFFFFCC] bg-green-600 p-1 text-white"
              }
            >
              <Football></Football>
            </div>
          </div>

          <div
            className={
              "h-[48px] w-[180px] rounded-app bg-[#FFFFFFE5] p-2 px-[1rem] py-[0.5rem] leading-[16.56px] text-[#15171C]"
            }
          >
            <p>Футбольное поле 1</p>
            <p>Открыто до 23:00</p>
          </div>
        </div>
      </YMapMarker>
    </>
  );
}

export default AllEventMap;
