import {defaultCardsDto} from "../../dtos/cards/cardDto.ts";
import Card from "./Card.tsx";

function Cards() {
    return <div className={"flex-1 overflow-scroll "}>
        {defaultCardsDto.map((card) => <Card card={card} key={`card-${card.id}`}></Card>)}
    </div>
}

export default Cards
