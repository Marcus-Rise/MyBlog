import React from "react";
import { POST_PAGE_URL } from "../dto/PostPageProps";
import { PostHeader } from "./PostHeader";
import Card from "react-bootstrap/Card";
import styles from "./PostCard.module.scss";
import Skeleton from "react-loading-skeleton";

interface IProps {
    title: string;
    slug: string;
    tags: string[];
    description: string;
    createdAt: string;
    className?: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <Card className={`border-0 ${styles.card} ` + props.className}>
            <Card.Body>
                <PostHeader
                    tags={props.tags}
                    title={props.title}
                    createdAt={props.createdAt}
                    link={`${POST_PAGE_URL}/${props.slug}`}
                />
                <Card.Text className={styles.description}>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export const PostSkeleton: React.FC = () => {
    return (
        <Card className={`border-0 ${styles.card}`}>
            <Card.Body>
                <Skeleton height={"2.25rem"} width={"75%"} />
                <br />
                <Skeleton count={1} width={"25%"} />
                <br />
                <Skeleton count={1} width={"85%"} />
                <br />
                <Skeleton count={1} width={"80%"} />
                <br />
                <Skeleton count={1} width={"95%"} />
                <br />
                <Skeleton count={1} width={"90%"} />
                <br />
                <Skeleton count={1} width={"60%"} />
            </Card.Body>
        </Card>
    );
};
