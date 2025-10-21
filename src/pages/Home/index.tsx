import styled from 'styled-components';
import Estatistica from '../../components/Estatisticas';
import Header from '../../components/Header/index'; 
import SecaoSuperior from '../../components/SecaoSuperior'; 
import Title from '../../components/Title';
import VideosMostra from '../../components/Videos';
import Footer from '../../components/Footer';

const ContainerSecao = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Home = () => {
  return (
    <div>
      <Header />
      <SecaoSuperior />
      <Estatistica/>
      
      <ContainerSecao> 
        <Title>Cursos em Destaque</Title>
        <VideosMostra />
      </ContainerSecao>
      <Footer/>
    </div>
  );
};

export default Home;