import { IndexPageProps } from "../dto/IndexPageProps";
import React, { Suspense, useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";
import { PostCard, PostSkeleton } from "../components/PostCard";
import { NextSeo } from "next-seo";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { IPostListItem } from "../dto/IPostListItem";
import { IGetPostListDto } from "../dto/GetPostList";

const LazyLoadPortion = React.lazy(() => import("../components/LoadPostListPortion"));

const Index: NextPage<IndexPageProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<number | null>(props.nextPage);
    const [posts, setPosts] = useState<IPostListItem[]>(props.posts);

    const getScrollTop = (): number => window.pageYOffset ?? document.body.scrollTop;

    const getDocumentHeight = (): number => {
        const body = document.body;
        const html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };

    const loaded = (data: IGetPostListDto) => {
        setPosts(posts.concat(data.posts));
        setNextPage(data.nextPage);
        setIsLoading(false);
    };

    useEffect(() => {
        window.onscroll = async () => {
            if (getScrollTop() >= getDocumentHeight() - window.innerHeight) {
                if (nextPage) {
                    setIsLoading(true);
                } else {
                    delete window.onscroll;
                }
            }
        };

        return () => {
            delete window.onscroll;
        };
    });

    return (
        <React.Fragment>
            <NextSeo title={"MarcusBlog"} description={"Ilya Konstantinov web developer"} />
            <Container className="pt-3">
                <Row>
                    {posts.map((i) => (
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
                {isLoading && nextPage && (
                    <Row>
                        <Col>
                            <Suspense fallback={<PostSkeleton />}>
                                <LazyLoadPortion page={nextPage} loaded={loaded}>
                                    <PostSkeleton />
                                </LazyLoadPortion>
                            </Suspense>
                        </Col>
                    </Row>
                )}
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
