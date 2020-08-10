import React from "react";

interface IProps {
    src: string;
    size: number | string;
    title: string;
}

export const Avatar: React.FC<IProps> = (props) => {
    return (
        <img
            style={{ height: props.size, width: props.size, borderRadius: "100%", objectFit: "cover" }}
            src={props.src}
            alt={props.title}
        />
    );
};
