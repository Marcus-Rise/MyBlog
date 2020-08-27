import React from "react";
import { POST_PAGE_URL } from "../dto/PostPageProps";
import { PostHeader } from "./PostHeader";

interface IProps {
    title: string;
    slug: string;
    tags: string[];
    description: string;
    createdAt: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <div className="card border-0">
            <div className="card-body">
                <PostHeader
                    tags={props.tags}
                    title={props.title}
                    createdAt={props.createdAt}
                    link={`${POST_PAGE_URL}/${props.slug}`}
                />
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};
