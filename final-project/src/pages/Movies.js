import React, { useContext } from "react";
import { Row, Col, Space } from "antd";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import GuestLayout from "../layouts/GuestLayout";

function PageContent() {
  let { movieList } = useContext(MovieContext);

  return (
    <Space direction="vertical" size={12} style={{ width: "100%" }}>
      <Row gutter={[12, 12]} justify="space-between">
        <Col>All Movies</Col>
      </Row>
      <Row gutter={[12, 12]}>
        {movieList &&
          movieList.map((movie) => {
            return (
              <Col key={`${movie.id}-movie-card`}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Space>
  );
}

function Movies() {
  return (
    <GuestLayout>
      <PageContent />
    </GuestLayout>
  );
}

export default Movies;
