import React from "react";

interface IProps {
    tags: string[];
}

export const PostTagList: React.FC<IProps> = ({ tags }) => {
    return (
        <React.Fragment>
            {tags.map((i, index) => (
                <span className={`mr-2`} key={index}>
                    #{i}
                </span>
            ))}
        </React.Fragment>
    );
};
