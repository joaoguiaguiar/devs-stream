import React, { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext'; 
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PesquisaContainer = styled.div`
  position: relative;
  width: 40rem; 

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

const InputPesquisa: React.FC = () => {
  const context = useContext(SearchContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { setSearchTerm } = context;

  const handleInputChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evento.target.value);
  };

  return (
    <PesquisaContainer>
      <InputEstilizado
        type="search"
        placeholder="Pesquisar"
        onChange={handleInputChange}
      />
      <IconeEstilizado className="bi bi-search lupa" />
    </PesquisaContainer>
  );
};

export default InputPesquisa;
