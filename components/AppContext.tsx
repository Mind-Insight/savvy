import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("Руководство по выживанию");

    return (
        <AppContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);