import { IndexPageProps } from "../dto/IndexPageProps";
import React from "react";
import { NextPage, NextPageContext } from "next";
import { PostCard } from "../components/PostCard";
import { NextSeo } from "next-seo";

const Index: NextPage<IndexPageProps> = (props) => {
    return (
        <React.Fragment>
            <NextSeo title={"MarcusBlog"} description={"Ilya Konstantinov web developer"} />
            <div className="container pt-5">
                {props.posts.map((i) => (
                    <div className="row mb-3" key={i.id}>
                        <div className="col-12">
                            <PostCard
                                title={i.title}
                                slug={i.slug}
                                tags={i.tags}
                                createdAt={i.createdAt}
                                description={i.description}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

// extending the default next context type
type PageContext<T> = NextPageContext & {
    query: T;
};

Index.getInitialProps = (context: PageContext<IndexPageProps>) => context.query;

export default Index;
