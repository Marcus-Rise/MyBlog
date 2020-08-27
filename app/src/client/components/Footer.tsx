import React from "react";
import styles from "./Footer.module.scss";
import Container from "react-bootstrap/Container";

export const Footer: React.FC = () => {
    return (
        <footer className={"mt-auto py-3 " + styles.footer}>
            <Container className="text-right">
                <span dangerouslySetInnerHTML={{ __html: "&#9400;" }} />
                <span className="mx-1">{new Date().getFullYear()}</span>
                <a href="https://marcus-rise.dev" target="_blank" rel="noreferrer" className={styles.link}>
                    Ilya Konstantinov
                </a>
            </Container>
        </footer>
    );
};
