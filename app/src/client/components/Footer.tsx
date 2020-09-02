import React from "react";
import styles from "./Footer.module.scss";
import Container from "react-bootstrap/Container";
import GitlabLogo from "../assets/gilab_logo.svg";

export const Footer: React.FC = () => {
    const gitlabLogoSize: number | string = "30px";

    return (
        <footer className={"mt-auto py-3 " + styles.footer}>
            <Container className="text-right">
                <span dangerouslySetInnerHTML={{ __html: "&#9400;" }} />
                <span className="mx-1">{new Date().getFullYear()}</span>
                <a href="https://marcus-rise.dev" target="_blank" rel="noreferrer" className={styles.link}>
                    Ilya Konstantinov
                </a>
                <a
                    href={"https://gitlab.com/marcus_rise/my-blog"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={"ml-2"}
                >
                    <img width={gitlabLogoSize} height={gitlabLogoSize} src={GitlabLogo} alt={"gitlab"} />
                </a>
            </Container>
        </footer>
    );
};
