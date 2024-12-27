import React from 'react';
import './App.css'
import './Card.css'

interface CardProps {
    // image: ImageData
    title: string;
    body: string;
}

const Card: React.FC<CardProps> = ({ title, body }) => {
    return (
        <>
            <div id='card'>
                <h1>{title}</h1>
                <h2>{body}</h2>
            </div>
        </>
    )
}

export default Card