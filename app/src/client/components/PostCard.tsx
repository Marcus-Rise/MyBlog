import React from "react";
import { DateDisplay } from "./DateDisplay";
import styles from "./PostCard.module.scss";
import headerStyles from "../pages/PostHeader.module.scss";
import { POST_PAGE_URL } from "../dto/PostPageProps";

interface IProps {
    title: string;
    slug: string;
    description: string;
    createdAt: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <a href={`${POST_PAGE_URL}/${props.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <h2 className={`card-title ${styles.hover} ${headerStyles.h2}`}>{props.title}</h2>
                </a>
                <p className="card-subtitle mb-2 text-muted">
                    <DateDisplay date={props.createdAt} />
                </p>
                <div>{props.description}</div>
            </div>
        </div>
    );
};
