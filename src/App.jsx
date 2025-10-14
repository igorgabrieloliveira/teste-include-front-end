import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import CyberRunners from "./assets/images/CyberRunners.png";
import DragaoLunar from "./assets/images/DragaoLunar.png";
import EcoDoSilencio from "./assets/images/EcoDoSilencio.png"
import CronicasDeVapor from "./assets/images/CronicasDeVapor.png"
import RefugioRiachoSereno from "./assets/images/RefugioRiachoSereno.png"

function App() {
  const [games, setGames] = useState([
    {
      id: "a-ascensao-do-dragao-lunar",
      title: "A Ascensão do Dragão Lunar",
      coverImage: DragaoLunar,
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
      coverImage: CyberRunners,
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
        {
      id: "eco-do-silencio",
      title: "Eco do Silêncio",
      coverImage: EcoDoSilencio,
      genre: "Terror Psicológico, Sobrevivência, Puzzle",
      description:
        "Você é uma jornalista investigando o misterioso desaparecimento de uma cidade inteira. Com apenas seu gravador, você deve desvendar os ecos do passado em um lugar onde o silêncio grita.",
      averageRating: "4.6",
      reviews: [
        {
          id: 1,
          name: "SustoGamer77",
          rating: 5,
          comment:
            "A atmosfera é incrivelmente tensa. Joguei com fones de ouvido no escuro e quase tive um ataque cardíaco. 10/10!",
        },
        {
          id: 2,
          name: "DetetiveAna",
          rating: 4,
          comment:
            "A história é genial e os puzzles são desafiadores. Um pouco lento no começo, mas a recompensa vale a pena.",
        },
      ],
    },
    {
      id: "cronicas-de-vapor",
      title: "Crônicas de Vapor",
      coverImage: CronicasDeVapor,
      genre: "Estratégia em Tempo Real, Steampunk, Construtor de Cidades",
      description:
        "Erga uma metrópole movida a engrenagens e vapor em um mundo que esqueceu o sol. Gerencie recursos, projete autômatos e navegue na complexa política das guildas para sobreviver.",
      averageRating: "4.7",
      reviews: [
        {
          id: 1,
          name: "Engenheiro Mestre",
          rating: 5,
          comment:
            "Profundidade incrível no gerenciamento da cidade. Cada decisão importa e o visual steampunk é fantástico.",
        },
        {
          id: 2,
          name: "Imperador_Rick",
          rating: 4.5,
          comment:
            "Leva um tempo para aprender todas as mecânicas, mas quando você entende, é um dos melhores jogos de estratégia que já joguei.",
        },
      ],
    },
    {
      id: "refugio-do-riacho-sereno",
      title: "Refúgio do Riacho Sereno",
      coverImage: RefugioRiachoSereno,
      genre: "Simulação, Fazenda, Vida Comunitária",
      description:
        "Abandone a agitação da cidade grande e restaure uma fazenda herdada. Cultive, pesque, cozinhe e faça amizade com os adoráveis moradores da vila enquanto constrói a vida dos seus sonhos.",
      averageRating: "4.9",
      reviews: [
        {
          id: 1,
          name: "Fazendeira Feliz",
          rating: 5,
          comment:
            "O jogo mais relaxante e charmoso do ano. É o meu refúgio perfeito para desestressar depois de um longo dia de trabalho.",
        },
        {
          id: 2,
          name: "Sam",
          rating: 5,
          comment:
            "Começa simples, mas tem tanto conteúdo para descobrir! Os personagens são cativantes e sempre há algo novo para fazer.",
        },
      ],
    },
  ]);

  const [busca, setBusca] = useState("");
  const buscaLowerCase = busca.toLowerCase();
  const gamesFiltrados = games.filter((game) =>
    game.title.toLowerCase().includes(buscaLowerCase)
  );
  
  function handleAddReview(gameId, review) {
    const newReview = {
      id: Date.now(),
      name: review.name,
      rating: review.note,
      comment: review.text,
    };

    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === gameId
          ? { ...game, reviews: [...game.reviews, newReview] }
          : game
      )
    );
  }
  return (
    <>
      <Outlet
        context={{
          gamesFiltrados,
          games,
          setBusca,
          onAddReview: handleAddReview,
        }}
      />
    </>
  );
}

export default App;
