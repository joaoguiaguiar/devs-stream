import React, { useContext } from 'react';
import { ContextoDeBusca  } from '../../context/SearchContext';
import styled from 'styled-components';
import styles from './Secao.module.scss';

const SectionEstilizado = styled.section`
  height: 6rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecaoSuperior: React.FC = () => {
  const context = useContext(ContextoDeBusca );

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { setFiltroDeCategoria } = context;

  const identificadorCategoryClick = (evento: React.MouseEvent<HTMLAnchorElement>) => {
    evento.preventDefault();
    const category = evento.currentTarget.getAttribute('data-name');
    
    if (category) {
      setFiltroDeCategoria(category);
    }
  };

  return (
    <SectionEstilizado>
      <div className={styles.container__wrapper__btn}>
        <a href="#" data-name="Front-end" className={styles.superior__item} onClick={identificadorCategoryClick}>Front End</a>
        <a href="#" data-name="Back-end" className={styles.superior__item} onClick={identificadorCategoryClick}>Back End</a>
        <a href="#" data-name="Banco de dados" className={styles.superior__item} onClick={identificadorCategoryClick}>Banco de Dados</a>
        <a href="#" data-name="UX" className={styles.superior__item} onClick={identificadorCategoryClick}>UX Design</a>
        <a href="#" data-name="Desenvolvedor de Software" className={styles.superior__item} onClick={identificadorCategoryClick}>Desenvolvimento de Software</a>
        <a href="#" data-name="DevOps" className={styles.superior__item} onClick={identificadorCategoryClick}>DevOps</a>
      </div>
    </SectionEstilizado>
  );
};

export default SecaoSuperior;
