import React from "react";
import { DateDisplay } from "./DateDisplay";

interface IProps {
    title: string;
    description: string;
    createdBy: string;
    createdAt: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <DateDisplay date={props.createdAt} /> by {props.createdBy}
                </h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};
