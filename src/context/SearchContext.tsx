import React, { createContext, useState, ReactNode } from 'react';

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    categoryFilter: string;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('tudo');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter }}>
            {children}
        </SearchContext.Provider>
    );
};
