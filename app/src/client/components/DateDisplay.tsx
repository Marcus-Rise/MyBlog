import React from "react";
import { format } from "date-fns";

interface IProps {
    date: string | Date;
    className: string;
}

export const DateDisplay: React.FC<IProps> = ({ date, className }) => {
    let str: string;
    const formatTempl = "dd.MM.yyyy";

    if (typeof date === "string") {
        str = format(new Date(date), formatTempl);
    } else {
        str = format(date, formatTempl);
    }

    return <span className={className}>{str}</span>;
};
