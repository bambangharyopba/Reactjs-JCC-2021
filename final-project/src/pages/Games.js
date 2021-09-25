import React, { useContext } from "react";
import { Row, Col, Space } from "antd";
import { GameContext } from "../context/GameContext";
import GuestLayout from "../layouts/GuestLayout";
import GameCard from "../components/GameCard";

function PageContent() {
  let { gameList } = useContext(GameContext);

  return (
    <Space direction="vertical" size={12} style={{ width: "100%" }}>
      <Row gutter={[12, 12]} justify="space-between">
        <Col>All Games</Col>
      </Row>
      <Row gutter={[12, 12]}>
        {gameList &&
          gameList.map((game) => {
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

function Games() {
  return (
    <GuestLayout>
      <PageContent />
    </GuestLayout>
  );
}

export default Games;
