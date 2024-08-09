'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ImageOverlayContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    currentImage: string | null;
    setCurrentImage: (src: string | null) => void;
};

const ImageOverlayContext = createContext<ImageOverlayContextType | undefined>(undefined);

export const ImageOverlayProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    return (
        <ImageOverlayContext.Provider value={{ isOpen, setIsOpen, currentImage, setCurrentImage }}>
            {children}
        </ImageOverlayContext.Provider>
    );
};

export const useImageOverlay = () => {
    const context = useContext(ImageOverlayContext);
    if (!context) {
        throw new Error('useImageOverlay must be used within an ImageOverlayProvider');
    }
    return context;
};