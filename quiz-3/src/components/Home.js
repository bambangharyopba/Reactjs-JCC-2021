import React, { useContext } from "react";
import MobileAppContext from "./MobileAppContext";
import { List, Typography, Image, Tag, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

function Home() {
  const { app } = useContext(MobileAppContext);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Title>Popular Mobile Apps</Title>
      </div>
      <List
        itemLayout="vertical"
        dataSource={app}
        renderItem={(item) => (
          <List.Item>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Title level={3}>{item.name}</Title>
              <Text>
                <Text strong>Release Year:</Text> {item.release_year}
              </Text>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {item.image_url && <Image height={400} src={item.image_url} />}
              </div>
              <Text>
                <Text strong>Category:</Text> {item.category}
              </Text>
              <Text>
                <Text strong>Price:</Text>{" "}
                {item.price === 0 ? "Free" : item.price}
              </Text>
              <Text>
                <Text strong>Rating: </Text>
                {item.rating}
              </Text>
              <Text>
                <Text strong>Size:</Text>{" "}
                {item.size >= 1000
                  ? `${item.size / 1000} GB`
                  : `${item.size} MB`}
              </Text>
              <Text>
                <Text strong>Platform: {"  "}</Text>
                {item.is_android_app === 1 && (
                  <Tag color="geekblue">Android</Tag>
                )}
                {item.is_ios_app === 1 && <Tag color="geekblue">iOS</Tag>}
              </Text>
              <Text strong>Description</Text>{" "}
              <Paragraph>{item.description}</Paragraph>
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
