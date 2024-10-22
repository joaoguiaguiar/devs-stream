import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import Video from '../../interfaces/videos';
import styles from './Formulario.module.scss';

const FormContainer = styled.section`
  height: 100vh;
  background-color: black;
  color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  text-align: center;
  background-color: white;
  color: black;
  padding: 2rem;
  border-radius: 8px;
  width: 40rem;
  height: 40rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

interface FormularioVideoProps {
  adicionarVideo: (video: Video) => void;
}

const FormularioVideo: React.FC<FormularioVideoProps> = ({ adicionarVideo }) => {
  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [imagem, setImagem] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');
  
  const navigate = useNavigate(); 
  
  const criarCard = () => {
    const novoVideo: Video = {
      titulo,
      descricao,
      url,
      imagem,
      categoria,
    };

    adicionarVideo(novoVideo);

    alert('Vídeo criado com sucesso!');

    setTitulo('');
    setDescricao('');
    setUrl('');
    setImagem('');
    setCategoria('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    criarCard(); 
  };

  return (
    <FormContainer>
      <Card>
        <h2>Criar novo card vídeo</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input__txt}
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <textarea
            className={styles.input__txtarea}
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <input
            className={styles.input__txt}
            type="url"
            placeholder="URL do Vídeo"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <input
            className={styles.input__txt}
            type="url"
            placeholder="URL da Imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />
          <input
            className={styles.input__txt}
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />

          <div className={styles.container__botao}>
            <button type="submit" className={styles.btn__criar} >Criar</button>

            <button  className={styles.btn__criar} onClick={() => navigate(-1)}>Voltar</button>
          </div>
        </form>
      </Card>
    </FormContainer>
  );
};

export default FormularioVideo;