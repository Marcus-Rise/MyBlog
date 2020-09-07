import { IndexPageProps } from "../dto/IndexPageProps";
import React, { useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";
import { PostCard } from "../components/PostCard";
import { NextSeo } from "next-seo";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Index: NextPage<IndexPageProps> = (props) => {
    const [nextPage, setNextPage] = useState<number | null>(props.nextPage);

    const getScrollTop = (): number => window.pageYOffset ?? document.body.scrollTop;

    const getDocumentHeight = (): number => {
        const body = document.body;
        const html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };

    useEffect(() => {
        window.onscroll = () => {
            if (getScrollTop() >= getDocumentHeight() - window.innerHeight) {
                console.debug("next", nextPage);
            }
        };

        return () => {
            window.onscroll = undefined;
        };
    });

    return (
        <React.Fragment>
            <NextSeo title={"MarcusBlog"} description={"Ilya Konstantinov web developer"} />
            <Container className="pt-3">
                <Row>
                    {props.posts.map((i) => (
                        <Col xs={12} key={i.id}>
                            <PostCard
                                title={i.title}
                                slug={i.slug}
                                tags={i.tags}
                                createdAt={i.createdAt}
                                description={i.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </React.Fragment>
    );
};

// extending the default next context type
type PageContext<T> = NextPageContext & {
    query: T;
};

Index.getInitialProps = (context: PageContext<IndexPageProps>) => context.query;

export default Index;
