'use client'

import React, { createContext, useContext, useState } from 'react';

// Define the language context
interface LanguageContextProps {
    currentLanguage: string;
    setCurrentLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    currentLanguage: 'en',
    setCurrentLanguage: () => {},
});

// Define the LanguageProvider component
const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    return (
        <LanguageContext.Provider
            value={{ currentLanguage, setCurrentLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

// Define the useLanguage hook
const useLanguage = () => {
    const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
    return { currentLanguage, setCurrentLanguage };
};

export { LanguageProvider, useLanguage };