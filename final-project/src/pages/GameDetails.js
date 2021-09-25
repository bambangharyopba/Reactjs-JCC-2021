import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { useParams } from "react-router";
import GameAPI from "../api/GameAPI";
import UserLayout from "../layouts/UserLayout";
import GuestLayout from "../layouts/GuestLayout";
import { UserContext } from "../context/UserContext";

function PageContent() {
  let { id } = useParams();
  let [data, setData] = useState();

  useEffect(() => {
    GameAPI.GetGame(id)
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, [id]);

  return data ? (
    <Row gutter={[48, 16]} wrap={false} style={{ color: "#aeaeae" }}>
      <Col>
        <Image
          alt="img"
          height={720}
          width={480}
          src={data.image_url}
          style={{ objectFit: "contain" }}
        />
      </Col>
      <Col flex="auto">
        <Row>
          <Col>
            <p style={{ fontSize: "3.5em" }}>{data.name}</p>
          </Col>
        </Row>
        <Row>
          <Col>Genre: {data.genre}</Col>
        </Row>
        <Row>
          <Col>Platform: {data.platform}</Col>
        </Row>
        <Row>
          <Col>Release: {data.release}</Col>
        </Row>
        <Row>
          <Col>Single Player: {data.singlePlayer === "1" ? "Yes" : "No"}</Col>
        </Row>
        <Row>
          <Col>Multiplayer: {data.multiplayer === "1" ? "Yes" : "No"}</Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <> </>
  );
}

function GameDetails() {
  let { loginStatus } = useContext(UserContext);

  return loginStatus ? (
    <UserLayout>
      <PageContent />
    </UserLayout>
  ) : (
    <GuestLayout>
      <PageContent />
    </GuestLayout>
  );
}

export default GameDetails;
