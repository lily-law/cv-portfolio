import React from 'react';

const Spinner = () => {
    return (
        <>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="42"></circle>
            </svg>
            <style jsx>{`
                svg {
                    animation: 2s linear infinite spin;
                    width: 100%;
                    margin: 16px;
                }
                @keyframes spin {
                    0% {
                        transform: rotateZ(0deg);
                    }
                    100% {
                        transform: rotateZ(360deg);
                    }
                }
                circle {
                    display: block;
                    fill: transparent;
                    stroke: #c69838;
                    stroke-width: 1px;
                    stroke-dasharray: 283;
                    stroke-linecap: round;
                    transform-origin: 50% 50%;
                    stroke-dashoffset: 280;
                    animation: 1.4s ease-in-out infinite both circle-animation;
                }
                @keyframes circle-animation {
                    0%,
                    25% {
                        stroke-width: 5px;
                        stroke: var(--pink-d);
                        stroke-dashoffset: 280;
                        transform: rotate(0);
                    }
                    50% {
                        stroke-width: 10px;
                        stroke: var(--green-l);
                        stroke-dashoffset: 75;
                        transform: rotate(45deg);
                    }
                    100% {
                        stroke-width: 5px;
                        stroke: var(--pink-l);
                        stroke-dashoffset: 280;
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    );
};

export default Spinner;
