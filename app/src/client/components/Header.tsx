import React from "react";
import styles from "./Header.module.scss";
import { INDEX_PAGE_URL } from "../dto/IndexPageProps";
import Container from "react-bootstrap/Container";

export const Header: React.FC = () => {
    return (
        <header className={"py-3 " + styles.header}>
            <Container>
                <a className={styles.link} href={INDEX_PAGE_URL}>
                    <h1 className={styles.title}>MarcusRise Blog</h1>
                </a>
            </Container>
        </header>
    );
};
