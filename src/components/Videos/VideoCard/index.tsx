import React from 'react';
import Video from '../../../interfaces/videos'; 
import styles from './VideoCard.module.scss'

interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    const videoId = video.url.split('youtu.be/')[1]?.split('?')[0]; 

    if (!videoId) {
        return <div className={styles.error}>Este vídeo não está disponível.</div>;
    }

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <li className={styles.videos__item}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <img 
                    className={styles.imgCanal} 
                    src={video.imagem} 
                    alt={`Thumbnail de ${video.titulo}`} 
                />
            </a>
            <div className={styles.descricaoVideo}>
                <h3 className={styles.tituloVideo}>
                    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                        {video.titulo}
                    </a>
                </h3>
                <p className={styles.tituloCanal}>{video.descricao}</p>
                <p className={styles.categoria}>{video.categoria}</p> {/* Categoria visível agora */}
            </div>
        </li>
    );
};



export default VideoCard; 
