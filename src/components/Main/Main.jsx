import "./Main.css";
import CardContainer from "../CardContainer/CardContainer";
function Main({ games }) {
  return (
    <main>
      <CardContainer games={games} />
    </main>
  );
}

export default Main;
