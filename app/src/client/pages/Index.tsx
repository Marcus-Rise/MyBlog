import { IndexPageProps } from "../../dto/IndexPageProps";
import React from "react";
import { NextPage, NextPageContext } from "next";
import { DateDisplay } from "../components/DateDisplay";

const Index: NextPage<IndexPageProps> = (props) => {
    return (
        <div className="container">
            {props.posts.map((i) => (
                <div className="row" key={i.id}>
                    <div className="col-12">
                        {i.id} {i.title} by {i.createdBy.username} at <DateDisplay date={i.createdAt} />
                    </div>
                    <br />
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
