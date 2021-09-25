import React from "react";
import { Link } from "react-router-dom";
import { Card, Empty } from "antd";

function GameCard(props) {
  let { game } = props;

  return (
    game && (
      <Link to={`/games/detail/${game.id}`}>
        <Card
          hoverable
          style={{
            border: "1px solid #2e2e2e",
            padding: 0,
            height: 240,
            width: 360,
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
              {game.platform && (
                <p
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
                  {game.platform}
                </p>
              )}
              {game.image_url ? (
                <img
                  alt="game-img"
                  src={game.image_url}
                  style={{
                    height: 240,
                    width: 360,
                    objectFit: "contain",
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
                    height: 240,
                    width: 360,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                  description={<p>Image not available</p>}
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
                {game.name}
              </p>
            </div>
          }
        />
      </Link>
    )
  );
}

export default GameCard;
