import { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useOutletContext } from "react-router-dom";

function Home() {
  const {games, setBusca, gamesFiltrados} = useOutletContext()
  // const [busca, setBusca] = useState("")
  // const buscaLowerCase = busca.toLowerCase()
  // const gamesFiltrados = games.filter((game) => game.title.toLowerCase().includes(buscaLowerCase))
  return (
    <div className="Home">
      <Header games={games} setBusca={setBusca}/>
      <Main games={gamesFiltrados} />
    </div>
  );
}

export default Home;
