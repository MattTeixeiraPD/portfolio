'use client';
import React, { createContext, useContext } from 'react';

const NavigationContext = createContext<{ navigateTo: (id: string) => void }>({
    navigateTo: () => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigateTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <NavigationContext.Provider value={{ navigateTo }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);