import React from "react";
import { format } from "date-fns";

interface IProps {
    date: string | Date;
}

export const DateDisplay: React.FC<IProps> = ({ date }) => {
    let str: string;
    const formatTempl = "dd.MM.yyyy";

    if (typeof date === "string") {
        str = format(new Date(date), formatTempl);
    } else {
        str = format(date, formatTempl);
    }

    return <span>{str}</span>;
};
