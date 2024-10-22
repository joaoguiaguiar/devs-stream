import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
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
  const context = useContext(SearchContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { setCategoryFilter } = context;

  const handleCategoryClick = (evento: React.MouseEvent<HTMLAnchorElement>) => {
    evento.preventDefault();
    const category = evento.currentTarget.getAttribute('data-name');
    
    if (category) {
      setCategoryFilter(category);
    }
  };

  return (
    <SectionEstilizado>
      <div className={styles.container__wrapper__btn}>
        <a href="#" data-name="Front-end" className={styles.superior__item} onClick={handleCategoryClick}>Front End</a>
        <a href="#" data-name="Back-end" className={styles.superior__item} onClick={handleCategoryClick}>Back End</a>
        <a href="#" data-name="Banco de dados" className={styles.superior__item} onClick={handleCategoryClick}>Banco de Dados</a>
        <a href="#" data-name="UX" className={styles.superior__item} onClick={handleCategoryClick}>UX Design</a>
        <a href="#" data-name="Desenvolvedor de Software" className={styles.superior__item} onClick={handleCategoryClick}>Desenvolvimento de Software</a>
        <a href="#" data-name="DevOps" className={styles.superior__item} onClick={handleCategoryClick}>DevOps</a>
      </div>
    </SectionEstilizado>
  );
};

export default SecaoSuperior;
