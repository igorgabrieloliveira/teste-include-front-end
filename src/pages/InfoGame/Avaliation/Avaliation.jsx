import "./Avaliation.css";

function Avaliation({ reviewData, setReviewData, onSubmit}) {
  const starValues = [1, 2, 3, 4, 5];

  function handleNoteChange(noteValue) {
    setReviewData((prevState) => ({
      ...prevState,
      note: noteValue,
    }));
  }

  return (
    <div className="avaliation-form">
      <h3>Deixe sua Avaliação</h3>
      <input
        className="avaliation-input"
        placeholder="Seu nome"
        type="text"
        value={reviewData.name}
        onChange={(e) =>
          setReviewData((prevState) => ({ ...prevState, name: e.target.value }))
        }
      />
      <textarea
        className="avaliation-textarea"
        placeholder="Escreva seu comentário..."
        value={reviewData.text}
        onChange={(e) =>
          setReviewData((prevState) => ({
            ...prevState,
            text: e.target.value,
          }))
        }
      />
      <div className="star-rating">
        {starValues.map((value) => (
          <button
            type="button"
            key={value}
            className={value <= reviewData.note ? "star filled" : "star"}
            onClick={() => handleNoteChange(value)}
            aria-label={`Avaliar com ${value} estrelas`}
          >
            ★
          </button>
        ))}
      </div>

      <button
        className="submit-button"
        onClick={onSubmit}
      >
        Enviar
      </button>
    </div>
  );
}

export default Avaliation;
