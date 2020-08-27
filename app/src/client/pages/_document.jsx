import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang={"ru"} className="h-100">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        href="/icon/favicon-16x16-dunplab-manifest-10525.png"
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                    />
                    <link
                        href="/icon/favicon-32x32-dunplab-manifest-10525.png"
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                    />
                    <link rel="apple-touch-icon" href="/icon/apple-icon-57x57-dunplab-manifest-10525.png" />
                    <meta name="theme-color" content="#445768" />
                </Head>
                <body className="h-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
