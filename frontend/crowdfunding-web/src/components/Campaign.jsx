import React from "react";
import { Card, Progress, Button } from "antd";
import Fade from "react-reveal/Fade";

export default ({ id, name, goal, currentAmount, description }) => (
  <Fade>
    <Card title={name} bordered>
      <p>{description}</p>
      <p>Goal: ${goal.toFixed(2)}</p>
      <div style={{ textAlign: "center" }}>
        ${currentAmount.toFixed(2)} / ${goal.toFixed(2)}
      </div>
      <Progress
        percent={(currentAmount / goal) * 100}
        status="active"
        strokeColor={{ from: "#108ee9", to: "#87d068" }}
        showInfo={false}
      />
      <Button type="primary" block style={{ marginTop: 50 }}>
        Donate
      </Button>
    </Card>
  </Fade>
);
