'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ImageOverlayContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const ImageOverlayContext = createContext<ImageOverlayContextType | undefined>(undefined);

export const ImageOverlayProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ImageOverlayContext.Provider value={{ isOpen, setIsOpen }}>
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