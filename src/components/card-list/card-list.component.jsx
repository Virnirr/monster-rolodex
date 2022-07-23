import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
