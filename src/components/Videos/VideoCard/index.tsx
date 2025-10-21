import React from 'react';
import Video from '../../../interfaces/videos';
import styles from './VideoCard.module.scss';

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
    <div className={styles.videoCard}>
      <div className={styles.videoThumbnail}>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.thumbnailImg}
            src={video.imagem}
            alt={`Thumbnail de ${video.titulo}`}
          />
        </a>

        <div className={styles.videoBadge}>
          {video.duracao || '00:00'}
        </div>

        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.playIcon}
        >
          ▶
        </a>
      </div>

      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            {video.titulo}
          </a>
        </h3>

        <p className={styles.videoDescription}>
          {video.descricao}
        </p>

        <div className={styles.videoMeta}>
          <span className={styles.videoCategory}>{video.categoria}</span>
          <span>•</span>
          <span>{video.visualizacoes || '0'} visualizações</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;