import { IndexPageProps } from "../dto/IndexPageProps";
import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostCard } from "../components/PostCard";
import { NextSeo } from "next-seo";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Index: NextPage<IndexPageProps> = (props) => {
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
