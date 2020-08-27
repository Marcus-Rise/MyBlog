import React from "react";
import styles from "./Header.module.scss";
import { INDEX_PAGE_URL } from "../dto/IndexPageProps";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const Header: React.FC = () => {
    return (
        <header className={"py-3 " + styles.header}>
            <Container style={{ height: "100%" }} fluid>
                <Row style={{ height: "100%" }} className="d-flex align-items-sm-center">
                    <Col>
                        <a style={{ textDecoration: "none", color: "inherit" }} href={INDEX_PAGE_URL}>
                            <h1
                                style={{ fontSize: "1.2em", margin: 0, display: "inline" }}
                                className={"ml-1 " + styles.hover}
                            >
                                MarcusRise Blog
                            </h1>
                        </a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
