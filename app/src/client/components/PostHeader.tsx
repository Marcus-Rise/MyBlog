import React from "react";
import styles from "./PostHeader.module.scss";
import { DateDisplay } from "./DateDisplay";
import { PostTagList } from "./PostTagList";
import { FaRegClock } from "react-icons/fa";

interface IProps {
    link?: string;
    title: string;
    createdAt: string;
    tags: string[];
}

export const PostHeader: React.FC<IProps> = (props) => {
    const h2 = <h2 className={`card-title ${styles.h2}`}>{props.title}</h2>;

    return (
        <React.Fragment>
            {props.link && (
                <a href={props.link} className={styles.link}>
                    {h2}
                </a>
            )}
            {!props.link && h2}
            <div className={`card-subtitle mb-2 text-muted d-flex align-items-center ${styles.meta}`}>
                <FaRegClock className="mr-1" />
                <DateDisplay className="mr-1" date={props.createdAt} />
                <PostTagList tags={props.tags} />
            </div>
        </React.Fragment>
    );
};
