import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        // Using a more sophisticated shadow that matches Ant Design's elevation style
        // Adding hover effect and transition for interactive feel
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
                        border border-gray-200 overflow-hidden cursor-pointer">
            {/* Card header with proper spacing and border treatment */}
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 m-0 leading-tight">
                    {title}
                </h3>
            </div>

            {/* Card content with consistent padding */}
            <div className="px-6 py-4">
                <p className="text-gray-600 text-base leading-relaxed m-0">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;