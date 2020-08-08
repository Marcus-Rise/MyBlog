import { IndexPageProps } from "../../dto/IndexPageProps";
import React from "react";

const Index: React.FC<IndexPageProps> = (props) => {
    return (
        <React.Fragment>
            <div>Hello {props.title}</div>
        </React.Fragment>
    );
};

export default Index;
