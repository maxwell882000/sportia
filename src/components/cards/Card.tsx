import Star from "../Icons/Star.tsx";
import {CardDto} from "../../dtos/cards/cardDto.ts";

interface Props {
    card: CardDto
}

function Card({card}: Props) {
    return <div>
        <div className="flex flex-row p-[1.5rem] justify-between items-center">
            <div>
                <h1 className={"text-white text-[1.25rem] font-light pb-1 leading-[1.5rem]"}>{card.name}</h1>
                <div className={"flex"}>
                    {Array.from({length: 5}).map((_, index) => {
                        const progress = Math.max(0, Math.min(card.review - index, 1));
                        return <Star key={index} progress={progress}/>;
                    })}
                </div>
                <div className={"text-[0.875rem]"}>
                    <p className={`${card.isOpen ? 'text-[#ACEF03]' : 'text-[#F63D68]'}`}>{card.workTime}</p>
                    <p className={"text-white"}>{card.address}</p>
                </div>
            </div>
            <div>
                <img alt={"card-image-event"} className={"rounded-app w-[5rem] h-[5rem]"} src={card.image}/>
            </div>

        </div>
        <div className="border-b-[1px] ml-[4rem]  border-[#1C1F24]"></div>
    </div>

}

export default Card
