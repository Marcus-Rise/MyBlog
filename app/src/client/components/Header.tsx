import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { INDEX_PAGE_URL } from "../dto/IndexPageProps";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div style={{ height: "100%" }} className="container-fluid">
                <div style={{ height: "100%" }} className="row d-flex align-items-sm-center">
                    <div className="col-auto">
                        <Link href={INDEX_PAGE_URL}>
                            <h1
                                style={{ fontSize: "1.2em", margin: 0, display: "inline" }}
                                className={"ml-1 " + styles.hover}
                            >
                                MarcusRise Blog
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
