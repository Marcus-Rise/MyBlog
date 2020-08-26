import React from "react";
import styles from "./PostTagList.module.scss";

interface IProps {
    tags: string[];
}

export const PostTagList: React.FC<IProps> = ({ tags }) => {
    return (
        <React.Fragment>
            {tags.map((i, index) => (
                <span className={`badge badge-pill ${styles.badgeSecondary} mr-2`} key={index}>
                    #{i}
                </span>
            ))}
        </React.Fragment>
    );
};
