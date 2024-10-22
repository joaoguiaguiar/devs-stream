import React, { useEffect, useState } from 'react';
import FormularioVideo from '../../components/Formulario/index';
import axios from 'axios';
import Video from '../../interfaces/videos';


const FormPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const obterDados = async () => {
    try {
      const { data } = await axios.get('https://my-json-server.typicode.com/joaoguiaguiar/videos-API/db');
      setVideos(data.videos); 
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    obterDados(); 
  }, []);

  const adicionarVideo = (novoVideo: Video) => {
    setVideos((prevVideos) => [...prevVideos, novoVideo]); 
  };

  return (
    <div>
      <FormularioVideo adicionarVideo={adicionarVideo} />
    </div>
  );
};

export default FormPage;
