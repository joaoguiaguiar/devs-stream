import styled from 'styled-components';
import styles from './Header.module.scss';
import logo from '../../../public/IMG/assets/logo.jpg';
import ImputPesquisa from './InputPesquisa';
import { Link } from 'react-router-dom';

const HeaderEstilizado = styled.header`
  padding: 2rem; 

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <nav className={styles.header__nav}>
        <figure>
          <Link to="/">
            <img src={logo} alt="logo site" className={styles.logo} />
          </Link>
        </figure>
        <ContainerForm>
          <form>
            <ImputPesquisa />
          </form>
        </ContainerForm>
        <ContainerIcon>
          <Link to='/form 'className={styles.criaVideo__btn}>
            <i className="bi bi-plus"></i> Criar
          </Link>
        </ContainerIcon>
      </nav>
    </HeaderEstilizado>
  );
};

export default Header;
