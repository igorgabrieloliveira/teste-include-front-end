import GameCard from "../GameCard/GameCard";
import './CardContainer.css'
function CardContainer({games}) {
  return (
    <div className="card-container">
      {games.map( (game) => (
        <GameCard key={game.id} infoGame={game}/>
      ))}
    </div>
  );
}

export default CardContainer;
