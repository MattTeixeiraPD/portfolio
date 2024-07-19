import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
type ImageOverlayProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export default function ImageOverlay({ src, alt, width, height }: ImageOverlayProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <Image src={src} alt={alt} width={width} height={height} onClick={handleOpen} className="cursor-pointer" />
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 min-h-screen min-w-screen transition-opacity duration-1000 ease-in-out opacity-100" onClick={handleClose}>
                    <div style={{ position: "relative", width: "100vw", height: "100vh", margin: "40px" }}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain",
                            }}
                        />
                        <button className="absolute top-2 right-2 text-white cursor-pointer" onClick={handleClose}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}