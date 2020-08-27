import "./global.scss";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp = ({ Component, pageProps }) => (
    <div className="d-flex flex-column h-100">
        <Header />
        <main role="main" className="flex-shrink-0">
            <Component {...pageProps} />
        </main>
        <Footer />
    </div>
);

export default MyApp;
