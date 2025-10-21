import React, { useContext } from 'react';
import { ContextoDeBusca } from '../../../context/SearchContext';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContainerDePesquisa = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        max-width: 100%;
    }
`;

const InputEstilizado = styled.input.attrs({ type: 'text' })`
    width: 100%;
    padding: 12px 48px 12px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    font-size: 15px;
    transition: all 0.3s;

    &::placeholder {
        font-weight: bold;
        font-size: 1rem;
        color: #71717a;
    }

    &:focus {
        outline: none;
        border-color: #6366f1;
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    @media (max-width: 768px) {
        padding: 10px 40px 10px 14px;
        font-size: 14px;

        &::placeholder {
            font-size: 0.875rem;
        }
    }

    @media (max-width: 480px) {
        padding: 9px 36px 9px 12px;
        font-size: 13px;

        &::placeholder {
            font-size: 0.8rem;
        }
    }
`;

const IconeEstilizado = styled.i`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #71717a;
    font-size: 20px;
    pointer-events: none;

    @media (max-width: 768px) {
        font-size: 18px;
        right: 12px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        right: 10px;
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
                placeholder="Buscar cursos, tutoriais, tecnologias...."
                onChange={lidarComMudanca}
            />
            <IconeEstilizado className="bi bi-search" />
        </ContainerDePesquisa>
    );
};

export default InputDePesquisa;