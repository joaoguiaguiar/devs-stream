import React, { createContext, useState, ReactNode } from 'react';
import Video from '../interfaces/videos';

interface TipoDeContextoDeBusca {
    termoDeBusca: string;
    setTermoDeBusca: React.Dispatch<React.SetStateAction<string>>;
    filtroDeCategoria: string;
    setFiltroDeCategoria: React.Dispatch<React.SetStateAction<string>>;
    adicionarVideo: (video: Video) => void; // Nova função
  }
  
  export const ContextoDeBusca = createContext<TipoDeContextoDeBusca | undefined>(undefined);
  
  export const ProvedorDeBusca: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [termoDeBusca, setTermoDeBusca] = useState<string>('');
    const [filtroDeCategoria, setFiltroDeCategoria] = useState<string>('tudo');
    const [videos, setVideos] = useState<Video[]>([]); 
  
    const adicionarVideo = (novoVideo: Video) => {
      setVideos((prevVideos) => [...prevVideos, novoVideo]); 
    };
  
    return (
      <ContextoDeBusca.Provider value={{ termoDeBusca, setTermoDeBusca, filtroDeCategoria, setFiltroDeCategoria, adicionarVideo }}>
        {children}
      </ContextoDeBusca.Provider>
    );
  };