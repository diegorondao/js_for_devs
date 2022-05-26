import React from "react";

interface Props {
    title: string;
    content: string;
    commentCount: number;
    tags: string[];
}

const Destructuring = ({ title, content, commentCount, tags }: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Quantidad de comentários {commentCount}</p>
            <div>
                {tags.map((tag) => {
                    return (
                        <span>#{tag}</span>
                    )
                })}
            </div>

        </div>

    )
}

export default Destructuring