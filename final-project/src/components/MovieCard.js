import React from "react";
import { Link } from "react-router-dom";
import { Card, Empty } from "antd";
import StarOutlined from "@ant-design/icons/StarOutlined";

function MovieCard(props) {
  let { movie } = props;
  return (
    movie && (
      <Link to={`/movies/detail/${movie.id}`}>
        <Card
          hoverable
          style={{
            border: "1px solid #2e2e2e",
            padding: 0,
            height: 360,
            width: 240,
            borderRadius: 6,
            overflow: "hidden",
          }}
          cover={
            <div
              style={{
                position: "relative",
                margin: 0,
                padding: 0,
              }}
            >
              <div
                style={{
                  borderRadius: "0px 0px 0px 6px",
                  position: "absolute",
                  right: 2,
                  padding: "2px 5px",
                  margin: 0,
                  backgroundColor: "rgba(20,20,20,.5)",
                  color: "white",
                }}
              >
                <StarOutlined
                  style={{
                    color: "goldenrod",
                    margin: "0px 3px",
                  }}
                />
                {movie.rating}
              </div>
              {movie.image_url ? (
                <img
                  alt="movie-img"
                  src={movie.image_url}
                  style={{
                    height: 360,
                    width: 240,
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  imageStyle={{
                    margin: 0,
                    padding: 0,
                  }}
                  style={{
                    margin: 0,
                    height: 360,
                    width: 240,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                  description={<p style={{ margin: 0 }}>Image not available</p>}
                />
              )}
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  padding: "4px 10px",
                  background:
                    "linear-gradient(rgba(20,20,20,0), 50%, rgba(20,20,20,1))",
                  color: "white",
                  margin: 0,
                }}
              >
                {movie.title}
              </p>
            </div>
          }
        />
      </Link>
    )
  );
}

export default MovieCard;
