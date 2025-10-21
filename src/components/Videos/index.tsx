import React, { useContext, useEffect, useState } from 'react';
import { ContextoDeBusca } from '../../context/SearchContext';
import VideoCard from './VideoCard';
import styled from 'styled-components';
import axios from 'axios';
import Video from '../../interfaces/videos';

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); // AUMENTEI de 320px para 350px
  gap: 24px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideosMostra: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    const context = useContext(ContextoDeBusca);
    if (!context) {
        throw new Error("FALHA");
    }
    
    const { termoDeBusca, filtroDeCategoria } = context; 

    useEffect(() => {
        const obterDados = async () => {
            try {
                const resposta = await axios.get('https://my-json-server.typicode.com/joaoguiaguiar/videos-API/db');
                setVideos(resposta.data.videos);
            } catch (erro) {
                setError('Falha ao carregar os vídeos. Tente novamente mais tarde.');
                console.log(erro);
            }
        };

        obterDados();
    }, []);

    const videosFiltrados = videos.filter((video) => {
        const tituloMatches = video.titulo.toLowerCase().includes(termoDeBusca.toLowerCase());
        const categoriaMatches = filtroDeCategoria === 'tudo' || video.categoria.toLowerCase().includes(filtroDeCategoria.toLowerCase());
        return tituloMatches && categoriaMatches;
    });

    return (
        <VideoGrid>
            {error && <p style={{ color: 'white', gridColumn: '1/-1', textAlign: 'center' }}>{error}</p>}
            {videosFiltrados.length > 0 ? (
                videosFiltrados.map((video) => (
                    <VideoCard video={video} key={video.id} />
                ))
            ) : (
                <p style={{ color: 'white', gridColumn: '1/-1', textAlign: 'center' }}>Nenhum vídeo encontrado.</p>
            )}
        </VideoGrid>
    );
};

export default VideosMostra;