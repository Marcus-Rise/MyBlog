import React from "react";
import { POST_PAGE_URL } from "../dto/PostPageProps";
import { PostHeader } from "./PostHeader";
import Card from "react-bootstrap/Card";

interface IProps {
    title: string;
    slug: string;
    tags: string[];
    description: string;
    createdAt: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <Card className="border-0">
            <Card.Body>
                <PostHeader
                    tags={props.tags}
                    title={props.title}
                    createdAt={props.createdAt}
                    link={`${POST_PAGE_URL}/${props.slug}`}
                />
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};
