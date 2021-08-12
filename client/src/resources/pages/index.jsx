import React from "react";
import { Col, Row } from "react-bootstrap";
import RAMUsage from "../components/RAMUsage";
import CPUUsage from "./../components/CPUUsage";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <Row className={styles.chartContainer}>
      <Col
        md={{
          offset: 2,
          span: 4,
        }}
      >
        <CPUUsage />
      </Col>
      <Col
        md={{
          span: 4,
        }}
      >
        <RAMUsage />
      </Col>
    </Row>
  );
};

export default HomePage;
