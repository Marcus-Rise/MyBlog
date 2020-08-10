import "./global.scss";
import React from "react";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
        </React.Fragment>
    );
}

export default MyApp;
