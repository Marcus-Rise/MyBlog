import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostPageProps } from "../dto/PostPageProps";
import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "../components/htmlSerializer";
import { NextSeo } from "next-seo";
import { PostHeader } from "../components/PostHeader";

const Post: NextPage<PostPageProps> = ({ post }) => {
    return (
        <React.Fragment>
            <NextSeo title={`MarcusBlog | ${post.title}`} description={post.description} />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0">
                            <PostHeader tags={post.tags} title={post.title} createdAt={post.createdAt} />
                            <div>
                                <RichText render={post.content} htmlSerializer={htmlSerializer} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

// extending the default next context type
type PageContext<T> = NextPageContext & {
    query: T;
};

Post.getInitialProps = (context: PageContext<PostPageProps>) => context.query;

export default Post;
