// components/CustomPagination.tsx
import React from 'react';

interface CustomPaginationProps {
    totalSlides: number;
    currentSlide: number;
    onSlideChange: (index: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
    totalSlides,
    currentSlide,
    onSlideChange,
}) => {
    return (
        <div className="flex justify-center space-x-2 mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className={`w-10 h-[6px] rounded-full transition duration-300 ${
                        index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};

export default CustomPagination;
