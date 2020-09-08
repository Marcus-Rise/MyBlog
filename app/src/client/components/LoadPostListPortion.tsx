import React, { useEffect } from "react";
import { GET_POST_LIST_URL, IGetPostListDto } from "../dto/GetPostList";

interface IProps {
    page: number;
    loaded: (data: IGetPostListDto) => void;
}

export const LoadPostListPortion: React.FC<IProps> = (props) => {
    const loadMorePosts = async (page: number): Promise<IGetPostListDto> => {
        const res = await fetch(`${GET_POST_LIST_URL}?page=${page}`);
        return await res.json();
    };

    useEffect(() => {
        loadMorePosts(props.page).then(props.loaded).catch(console.error);
    }, []);

    return <React.Fragment>{props.children}</React.Fragment>;
};

export default LoadPostListPortion;
