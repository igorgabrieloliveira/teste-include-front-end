import "./GameCard.css";
import { useNavigate } from "react-router-dom";

function GameCard({ infoGame }) {

  const navigate = useNavigate()

  function onSeeDetailsClick() {
    const query = new URLSearchParams();
    query.set("id", infoGame.id);
    navigate(`/info?${query.toString()}`)
  }
  return (
    <div
      onClick={() => {
        onSeeDetailsClick();
      }}
      className="game-card"
    >
      <img
        src={infoGame.coverImage}
        alt="Capa do Jogo Fictício"
      />
      <div className="game-card-content">
        <h3 className="title">{infoGame.title}</h3>
        <p className="description">{infoGame.description}</p>
        <span className="genre">{infoGame.genre}</span>
      </div>
      <div className="status-bar">
        <span>4.8/5</span>
        <span>Lançamento: 2024</span>
      </div>
    </div>
  );
}

export default GameCard;
