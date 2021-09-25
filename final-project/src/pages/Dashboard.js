import React, { useContext, useState, useEffect } from "react";
import { UserLayout } from "../layouts";
import { MovieContext, GameContext } from "../context";
import { Card, Row, Col, Typography } from "antd";

function PageContent() {
  let { movieList } = useContext(MovieContext);
  let { gameList } = useContext(GameContext);
  let [countMovies, setCountMovies] = useState();
  let [countGames, setCountGames] = useState();

  useEffect(() => {
    if (movieList) setCountMovies(movieList.length);
    if (gameList) setCountGames(gameList.length);
  }, [movieList, gameList]);

  return (
    <>
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <Typography style={{ color: "#aeaeae" }}>Dashboard</Typography>
        </Col>
        <Col span={12}>
          <Card
            title="Jumlah Movies"
            headStyle={{ backgroundColor: "#2e2e2e", color: "#aeaeae" }}
            bodyStyle={{
              border: "none",
              color: "#aeaeae",
              backgroundColor: "#2e2e2e",
            }}
            style={{
              border: "none",
            }}
          >
            {countMovies}
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Jumlah Games"
            headStyle={{ backgroundColor: "#2e2e2e", color: "#aeaeae" }}
            bodyStyle={{
              border: "none",
              color: "#aeaeae",
              backgroundColor: "#2e2e2e",
            }}
            style={{
              border: "none",
            }}
          >
            {countGames}
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="Other"
            headStyle={{ backgroundColor: "#2e2e2e", color: "#aeaeae" }}
            bodyStyle={{
              border: "none",
              color: "#aeaeae",
              backgroundColor: "#2e2e2e",
            }}
            style={{
              border: "none",
            }}
          >
            Dashboard
          </Card>
        </Col>
      </Row>
    </>
  );
}

function Dashboard() {
  return (
    <UserLayout>
      <PageContent />
    </UserLayout>
  );
}

export default Dashboard;
