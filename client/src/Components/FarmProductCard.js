import React, { useState, useEffect } from 'react';

const FarmProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [animateLeft, setAnimateLeft] = useState(false);
    const [animateTop, setAnimateTop] = useState(false);
    const [animateRight, setAnimateRight] = useState(false);
    const [animateBottom, setAnimateBottom] = useState(false);

    // For touch devices
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (isHovered || isTouched) {
            const leftTimer = setTimeout(() => setAnimateLeft(true), 50);
            const topTimer = setTimeout(() => setAnimateTop(true), 250);
            const rightTimer = setTimeout(() => setAnimateRight(true), 450);
            const bottomTimer = setTimeout(() => setAnimateBottom(true), 650);

            return () => {
                clearTimeout(leftTimer);
                clearTimeout(topTimer);
                clearTimeout(rightTimer);
                clearTimeout(bottomTimer);
            };
        } else {
            setAnimateLeft(false);
            setAnimateTop(false);
            setAnimateRight(false);
            setAnimateBottom(false);
        }
    }, [isHovered, isTouched]);

    // Touch handler for mobile devices
    const handleTouch = () => {
        setIsTouched(!isTouched);
    };

    // Default product if none is provided
    const defaultProduct = {
        name: "Organic Vegetables",
        description: "Farm-fresh organic vegetables harvested daily from our local farms.",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=870&q=80"
    };

    const { name, description, price, image } = product || defaultProduct;

    return (
        <div
            className="relative w-full max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 transform hover:shadow-xl hover:scale-105 sm:mx-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouch}
        >
            {/* Border Animation Container */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Left Border */}
                <div
                    className={`absolute left-0 w-0.5 bg-primary transition-all duration-500 opacity-0 ${(isHovered || isTouched) ? 'opacity-100' : ''}`}
                    style={{
                        height: animateLeft ? '100%' : '0%',
                        bottom: 0
                    }}
                />
                {/* Top Border */}
                <div
                    className={`absolute top-0 h-0.5 bg-primary transition-all duration-500 opacity-0 ${(isHovered || isTouched) ? 'opacity-100' : ''}`}
                    style={{
                        width: animateTop ? '100%' : '0%',
                        left: 0
                    }}
                />
                {/* Right Border */}
                <div
                    className={`absolute right-0 w-0.5 bg-primary transition-all duration-500 opacity-0 ${(isHovered || isTouched) ? 'opacity-100' : ''}`}
                    style={{
                        height: animateRight ? '100%' : '0%',
                        top: 0
                    }}
                />
                {/* Bottom Border */}
                <div
                    className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-500 opacity-0 ${(isHovered || isTouched) ? 'opacity-100' : ''}`}
                    style={{
                        width: animateBottom ? '100%' : '0%',
                        right: 0
                    }}
                />
            </div>

            {/* Product Image */}
            <div className="overflow-hidden h-40 sm:h-48 flex items-center justify-center ">
                <img
                    src={image}
                    alt={name}
                    className={`object-cover w-[90%] h-[90%] transition-transform duration-500 rounded ${(isHovered || isTouched) ? 'scale-110' : ''}`}
                />
            </div>

            {/* Content Container */}
            <div className="p-3 sm:p-4">
                <h3 className={`mb-1 sm:mb-2 text-lg sm:text-xl font-bold transition-colors duration-300 ${(isHovered || isTouched) ? 'text-primary' : 'text-gray-800'}`}>
                    {name}
                </h3>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">{description}</p>

                {/* Price and Add to Cart */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-base sm:text-lg font-semibold text-secondary">{price}</span>
                    <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-secondary transition-all bg-transparent border-2 border-primary rounded-lg w-full sm:w-auto  focus:ring-2  hover:bg-primary hover:text-white z-10">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FarmProductCard;