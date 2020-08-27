import React from "react";
import styles from "./PostHeader.module.scss";
import { DateDisplay } from "./DateDisplay";
import { PostTagList } from "./PostTagList";
import { FaRegClock } from "react-icons/fa/";
import Card from "react-bootstrap/Card";

interface IProps {
    link?: string;
    title: string;
    createdAt: string;
    tags: string[];
}

export const PostHeader: React.FC<IProps> = (props) => {
    const h2 = (
        <Card.Title as={"h2"} className={styles.h2}>
            {props.title}
        </Card.Title>
    );

    return (
        <React.Fragment>
            {props.link && (
                <a href={props.link} className={styles.link}>
                    {h2}
                </a>
            )}
            {!props.link && h2}
            <Card.Subtitle className={`mb-2 text-muted d-flex align-items-center ${styles.meta}`}>
                <FaRegClock className="mr-1" />
                <DateDisplay className="mr-1" date={props.createdAt} />
                <PostTagList tags={props.tags} />
            </Card.Subtitle>
        </React.Fragment>
    );
};
