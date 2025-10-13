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
        src="https://br.freepik.com/imagem-ia-gratis/cena-de-fantasia-em-3d_157442674.htm#fromView=search&page=1&position=1&uuid=56c5f64e-6eee-4295-bb8e-7c407aac0a91&query=clash+royalhttps://unsplash.com/pt-br/fotografias/um-sinal-de-zona-de-jogo-sentado-em-cima-de-uma-mesa-de-computador-GRkp_Xtd7Bg"
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
