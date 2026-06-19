"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const IMAGES = [
    "/avatar_1.webp",
    "/avatar_2.webp",
    "/avatar_3.png"
]

export default function RotatingHeadshot() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let fadeTimeout: ReturnType<typeof setTimeout> | null = null;

        const interval = setInterval(() => {
            setIsVisible(false);

            fadeTimeout = setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
                setIsVisible(true);
            }, 300);
        }, 6000);

        return () => {
            clearInterval(interval);
            if (fadeTimeout) clearTimeout(fadeTimeout);
        };
    }, []);

    return (
        <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-md">
            <Image
                src={IMAGES[currentImageIndex]}
                alt="Portrait"
                fill
                sizes="200px"
                quality={60}
                className={`object-cover object-center transition-opacity duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                priority
            />
        </div>
    );
}