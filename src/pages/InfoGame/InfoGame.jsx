import { useOutletContext, useSearchParams } from "react-router-dom";
import "./InfoGame.css";
import { useState } from "react";

function InfoGame() {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get("id");

  const [review, setReview] = useState("");
  const { games } = useOutletContext();
  const game = games.find((game) => game.id == gameId);

  console.log(game);
  if (!games) {
    return (
      <div className="not-found-container">
        <h1>Jogo não encontrado!</h1>
        <p>Não foi possível encontrar um jogo com o ID "{gameId}".</p>
        {/* <Link to="/" className="back-link">Voltar para a página inicial</Link> */}
      </div>
    );
  }

  return (
    <main className="info-game-container">
      <h1 className="game-title">{game.title}</h1>

      <img
        src={game.coverImage}
        alt={`Capa de ${game.title}`}
        className="game-cover"
      />

      <p className="game-genre">Gênero: {game.genre}</p>

      <p className="game-description">{game.description}</p>

      <div className="game-average-rating">
        Nota Média: {game.averageRating}/5 ⭐
      </div>

      <div className="reviews-section">
        <h2 className="reviews-section-title">Avaliações dos Jogadores</h2>

        {game.reviews && game.reviews.length > 0 ? (
          game.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-author">
                {review.name} - Nota: {review.rating}/5 ⭐
              </p>
              <p>"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p>Este jogo ainda não tem avaliações.</p>
        )}
        <input
          value={review}
          onChange={(e) => setReview(e.target.value)}
          type="text"
        />
      </div>

      {console.log(review)}
    </main>
  );
}

export default InfoGame;
