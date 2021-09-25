import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Image } from "antd";
import { useParams } from "react-router";
import MovieAPI from "../api/MovieAPI";
import StarFilled from "@ant-design/icons/StarFilled";
import GuestLayout from "../layouts/GuestLayout";
import UserLayout from "../layouts/UserLayout";
import { UserContext } from "../context/UserContext";

function PageContent() {
  let { id } = useParams();
  let [data, setData] = useState();

  useEffect(() => {
    MovieAPI.GetMovie(id)
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
            <p style={{ fontSize: "3.5em" }}>{data.title}</p>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col>{data.duration} min</Col>
          <Col>{data.year}</Col>
          <Col>{data.genre}</Col>
          <Col>
            <StarFilled
              style={{
                color: "goldenrod",
                margin: "0px 3px",
              }}
            />
            {data.rating}
          </Col>
        </Row>
        <Row>
          <Col>Description</Col>
        </Row>
        <Row>
          <Col>{data.description}</Col>
        </Row>
        <Row>
          <Col>Review</Col>
        </Row>
        <Row>
          <Col>{data.review}</Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <></>
  );
}

function MovieDetails() {
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

export default MovieDetails;
