import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Space, Button } from "antd";
import { MovieContext } from "../context/MovieContext";
import { GameContext } from "../context/GameContext";
import { UserContext } from "../context/UserContext";
import MovieCard from "../components/MovieCard";
import GameCard from "../components/GameCard";
import GuestLayout from "../layouts/GuestLayout";

function PageContent() {
  let { movieList } = useContext(MovieContext);
  let { gameList } = useContext(GameContext);
  let { loginStatus } = useContext(UserContext);

  return (
    <Space direction="vertical" size={12} style={{ width: "100%" }}>
      <Row gutter={[12, 12]} justify="space-between">
        <Col>Movies</Col>
        <Col>
          <Button
            style={{ backgroundColor: "#2e2e2e", border: 0, color: "#aeaeae" }}
          >
            <Link to={loginStatus ? "/guest-view/movies" : "/movies"}>
              More &gt;
            </Link>
          </Button>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        {movieList &&
          movieList.slice(0, 6).map((movie) => {
            return (
              <Col key={`${movie.id}-movie-card`}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
      <Row gutter={[12, 12]} justify="space-between">
        <Col>Games</Col>
        <Col>
          <Button
            style={{ backgroundColor: "#2e2e2e", border: 0, color: "#aeaeae" }}
          >
            <Link to={loginStatus ? "/guest-view/games" : "/games"}>
              More &gt;
            </Link>
          </Button>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        {gameList &&
          gameList.slice(0, 4).map((game) => {
            return (
              <Col key={`${game.id}-game-card`}>
                <GameCard game={game} />
              </Col>
            );
          })}
      </Row>
    </Space>
  );
}

function Home() {
  return (
    <GuestLayout>
      <PageContent />
    </GuestLayout>
  );
}

export default Home;
