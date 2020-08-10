import React from "react";
import styles from "./Header.module.scss";
import { Avatar } from "./Avatar";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div style={{ height: "100%" }} className="container-fluid">
                <div style={{ height: "100%" }} className="row d-flex align-items-sm-center">
                    <div className="col-auto">
                        <Avatar
                            src={"https://marcus-rise.dev/profile-cropped/profile-cropped_ngn5s8_c_scale,w_275-min.png"}
                            size={40}
                            title={"MarcusRise"}
                        />
                        <h1 style={{ fontSize: "1.2em", margin: 0, display: "inline" }} className="ml-1">
                            MarcusRise Blog
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};
