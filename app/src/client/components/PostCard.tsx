import React from "react";
import { DateDisplay } from "./DateDisplay";
import styles from "./PostCard.module.scss";
import { POST_PAGE_URL } from "../dto/PostPageProps";

interface IProps {
    title: string;
    slug: string;
    createdAt: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <a href={`${POST_PAGE_URL}/${props.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <h5 className={"card-title " + styles.hover}>{props.title}</h5>
                </a>
                <h6 className="card-subtitle mb-2 text-muted">
                    <DateDisplay date={props.createdAt} />
                </h6>
            </div>
        </div>
    );
};
