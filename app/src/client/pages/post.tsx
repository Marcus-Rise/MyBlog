import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostPageProps } from "../dto/PostPageProps";
import { DateDisplay } from "../components/DateDisplay";
import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "../components/htmlSerializer";
import { NextSeo } from "next-seo";
import headerStyles from "./PostHeader.module.scss";
import { PostTagList } from "../components/PostTagList";

const Post: NextPage<PostPageProps> = ({ post }) => {
    return (
        <React.Fragment>
            <NextSeo title={`MarcusBlog | ${post.title}`} description={post.description} />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0">
                            <div>
                                <h2 className={`card-title ${headerStyles.h2}`}>{post.title}</h2>
                                <p className="card-subtitle mb-2 text-muted">
                                    <DateDisplay date={post.createdAt} />
                                </p>
                                <div>
                                    <PostTagList tags={post.tags} />
                                </div>
                            </div>
                            <hr />
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
