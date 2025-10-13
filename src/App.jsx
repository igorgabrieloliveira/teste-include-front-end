import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './App.css'

function App() {
  const [games, setGames] = useState([
    {
      id: "a-ascensao-do-dragao-lunar",
      title: "A Ascensão do Dragão Lunar",
      coverImage:
        "https://via.placeholder.com/350x450.png/6200ee/ffffff?text=Capa+Dragão+Lunar",
      genre: "RPG, Fantasia, Aventura",
      description:
        "Embarque em uma jornada épica através do vasto e misterioso reino de Eldoria, um mundo à beira do colapso...",
      averageRating: "4.8",
      reviews: [
        {
          id: 1,
          name: "João Gamer",
          rating: 5,
          comment:
            "Simplesmente magnífico! A história é envolvente e os gráficos são deslumbrantes.",
        },
        {
          id: 2,
          name: "Maria Aventureira",
          rating: 4,
          comment: "Um RPG sólido com muita coisa para fazer.",
        },
      ],
    },
    {
      id: "cyber-runners",
      title: "Cyber Runners",
      coverImage:
        "https://via.placeholder.com/350x450.png/03dac6/ffffff?text=Capa+Cyber+Runners",
      genre: "Ação, Corrida, Cyberpunk",
      description:
        "Em uma metrópole neon, a velocidade é tudo. Corra, desvie e lute contra corporações em um jogo de ação frenético.",
      averageRating: "4.5",
      reviews: [
        {
          id: 1,
          name: "Carlos_Gamer",
          rating: 4.5,
          comment: "Adrenalina pura! A jogabilidade é viciante.",
        },
        {
          id: 2,
          name: "Beatriz V.",
          rating: 4,
          comment:
            "A estética cyberpunk é incrível, mas a história poderia ser mais profunda.",
        },
      ],
    },
  ]);

  const [busca, setBusca] = useState("")
  const buscaLowerCase = busca.toLowerCase()
  const gamesFiltrados = games.filter((game) => game.title.toLowerCase().includes(buscaLowerCase))
  return (
    <>
      <Outlet context={{gamesFiltrados, games, setBusca}}/>
    </>
  );
}

export default App;
