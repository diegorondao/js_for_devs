import React from "react";

export enum Category {
    JS = "Javascript",
    TS = "Typescript",
    P = "Python"
}

interface Props {
    title: string,
    category: Category;
}

const Enum = ({ title, category}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{category}</p>
        </div>

    )
}

export default Enum