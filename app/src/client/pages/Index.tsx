import { IndexPageProps } from "../../dto/IndexPageProps";
import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostCard } from "../components/PostCard";

const Index: NextPage<IndexPageProps> = (props) => {
    return (
        <div className="container pt-5">
            {props.posts.map((i) => (
                <div className="row mb-3" key={i.id}>
                    <div className="col-12">
                        <PostCard
                            title={i.title}
                            description={i.description}
                            createdBy={i.createdBy.username}
                            createdAt={i.createdAt}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

// extending the default next context type
type PageContext<T> = NextPageContext & {
    query: T;
};

Index.getInitialProps = (context: PageContext<IndexPageProps>) => context.query;

export default Index;
