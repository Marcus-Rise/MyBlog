import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostPageProps } from "../dto/PostPageProps";
import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "../components/htmlSerializer";
import { NextSeo } from "next-seo";
import { PostHeader } from "../components/PostHeader";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Post: NextPage<PostPageProps> = ({ post }) => {
    return (
        <React.Fragment>
            <NextSeo title={`MarcusBlog | ${post.title}`} description={post.description} />
            <Container>
                <Card className="pt-3 border-0">
                    <Card.Body>
                        <PostHeader tags={post.tags} title={post.title} createdAt={post.createdAt} />
                        <Card.Text>
                            <RichText render={post.content} htmlSerializer={htmlSerializer} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    );
};

// extending the default next context type
type PageContext<T> = NextPageContext & {
    query: T;
};

Post.getInitialProps = (context: PageContext<PostPageProps>) => context.query;

export default Post;
