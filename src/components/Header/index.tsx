import styled from 'styled-components';
import styles from './Header.module.scss';
import logo from '../../../public/IMG/assets/logo.png';
import ImputPesquisa from './InputPesquisa';
import { Link } from 'react-router-dom';

const HeaderEstilizado = styled.header`
    @media (max-width: 768px) {
        padding: 0.5rem 0;
    }
`;

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: 800px;
    
    @media (min-width: 1025px) {
        max-width: 800px;
    }

    @media (max-width: 1024px) {
        order: 3;
        width: 100%;
        max-width: 100%;
        flex-basis: 100%;
    }
`;

const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

const Header = () => {
    return (
        <HeaderEstilizado>
            <nav className={styles.header__nav}>
                <figure className={styles.container__logo}>
                    <Link to="/" className={styles.container__logo}>
                        <img src={logo} alt="logo site" className={styles.logo} />
                        <h1 className='text-devstream no-underline text-3xl font-bold'>
                            DevStream
                        </h1>
                    </Link>
                </figure>
                <ContainerForm>
                    <form style={{ width: '100%' }}>
                        <ImputPesquisa />
                    </form>
                </ContainerForm>
                <ContainerIcon>
                    <Link to='/form' className={styles.criaVideo__btn}>
                        <i className="bi bi-plus"></i> Criar Vídeo
                    </Link>
                </ContainerIcon>
            </nav>
        </HeaderEstilizado>
    );
};

export default Header;