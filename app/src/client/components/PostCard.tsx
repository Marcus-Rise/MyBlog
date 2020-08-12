import React from "react";
import { DateDisplay } from "./DateDisplay";
import Link from "next/link";
import styles from "./PostCard.module.scss";
import { POST_PAGE_URL } from "../../dto/PostPageProps";

interface IProps {
    title: string;
    slug: string;
    description: string;
    createdBy: string;
    createdAt: string;
}

export const PostCard: React.FC<IProps> = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <Link href={`${POST_PAGE_URL}/${props.slug}`}>
                    <h5 className={"card-title " + styles.hover}>{props.title}</h5>
                </Link>
                <h6 className="card-subtitle mb-2 text-muted">
                    <DateDisplay date={props.createdAt} /> by {props.createdBy}
                </h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};
