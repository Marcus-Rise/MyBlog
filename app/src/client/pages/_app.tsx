import "./global.scss";
import React from "react";
import { Header } from "../components/Header";

const MyApp = ({ Component, pageProps }) => (
    <React.Fragment>
        <Header />
        <main>
            <Component {...pageProps} />
        </main>
    </React.Fragment>
);

export default MyApp;
