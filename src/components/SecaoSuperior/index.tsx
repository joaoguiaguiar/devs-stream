import React, { useContext, useState } from 'react';
import { ContextoDeBusca } from '../../context/SearchContext';
import styled from 'styled-components';
import styles from './Secao.module.scss';

const SectionEstilizado = styled.section`
  padding: 24px 40px;
  background: rgba(18, 18, 27, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 20px 24px;
  }

  @media (max-width: 768px) {
    padding: 16px 16px;
  }

  @media (max-width: 480px) {
    padding: 12px 12px;
  }
`;

const SecaoSuperior: React.FC = () => {
  const context = useContext(ContextoDeBusca);
  const [categoriaAtiva, setCategoriaAtiva] = useState('tudo');

  if (!context) {
    return <div>Erro no contextAPI</div>;
  }

  const { setFiltroDeCategoria } = context;

  const categorias = [
    { key: 'tudo', label: 'Todos' },
    { key: 'Front-end', label: 'Front End' },
    { key: 'Back-end', label: 'Back End' },
    { key: 'Banco de dados', label: 'Banco de Dados' },
    { key: 'UX', label: 'UX Design' },
    { key: 'Desenvolvedor de Software', label: 'Dev Software' },
    { key: 'DevOps', label: 'DevOps' }
  ];

  const handleClick = (categoria: string) => {
    setFiltroDeCategoria(categoria);
    setCategoriaAtiva(categoria);
  };

  return (
    <SectionEstilizado>
      <div className={styles.container__wrapper__btn}>
        {categorias.map((categoria) => (
          <button
            key={categoria.key}
            className={`${styles.superior__item} ${
              categoriaAtiva === categoria.key ? styles.active : ''
            }`}
            onClick={() => handleClick(categoria.key)}
            aria-label={`Filtrar por ${categoria.label}`}
          >
            {categoria.label}
          </button>
        ))}
      </div>
    </SectionEstilizado>
  );
};

export default SecaoSuperior;