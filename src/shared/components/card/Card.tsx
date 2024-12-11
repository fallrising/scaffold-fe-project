import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 max-w-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default Card;