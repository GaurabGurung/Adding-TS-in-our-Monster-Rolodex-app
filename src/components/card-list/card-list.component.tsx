import "./card-list.styles.css";
import Card from "../card/card.component";

import { Monster } from "../../App";

type CardListProp = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProp) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
