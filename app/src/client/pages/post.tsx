import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostPageProps } from "../dto/PostPageProps";
import { DateDisplay } from "../components/DateDisplay";

const Post: NextPage<PostPageProps> = ({ post }) => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <DateDisplay date={post.createdAt} />
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="card-text">{/*<ReactMarkdown source={post.text} />*/}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// extending the default next context type
type PageContext<T> = NextPageContext & {
    query: T;
};

Post.getInitialProps = (context: PageContext<PostPageProps>) => context.query;

export default Post;
