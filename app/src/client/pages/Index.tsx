import { IndexPageProps } from "../../dto/IndexPageProps";
import React from "react";
import { NextPage, NextPageContext } from "next";

const Index: NextPage<IndexPageProps> = (props) => {
    return (
        <div>
            {props.posts.map((i) => (
                <React.Fragment key={i.id}>
                    <div>
                        {i.id} {i.title}
                    </div>
                    <br />
                </React.Fragment>
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
