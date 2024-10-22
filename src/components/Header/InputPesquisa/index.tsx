import React, { useContext } from 'react';
import { ContextoDeBusca } from '../../../context/SearchContext'; 
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContainerDePesquisa = styled.div`
  position: relative;
  width: 30rem; 

  @media (max-width: 768px) {
    width: 13.5rem; 
  }
`;

const InputEstilizado = styled.input.attrs({ type: 'text' })`
  width: 100%;
  border-radius: 3rem;
  border: 1px solid #ccc;
  padding: 1rem;

  &::placeholder {
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem;

    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

const IconeEstilizado = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #333;

  &.lupa {
    right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    &.lupa {
      right: 0.3rem;
    }
  }
`;

const InputDePesquisa: React.FC = () => {
  const contexto = useContext(ContextoDeBusca);

  if (!contexto) {
    return <div>Erro: Contexto não está disponível</div>;
  }

  const { setTermoDeBusca } = contexto;

  const lidarComMudanca = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setTermoDeBusca(evento.target.value);
  };

  return (
    <ContainerDePesquisa>
      <InputEstilizado
        type="search"
        placeholder="Pesquisar"
        onChange={lidarComMudanca}
      />
      <IconeEstilizado className="bi bi-search lupa" />
    </ContainerDePesquisa>
  );
};

export default InputDePesquisa;
