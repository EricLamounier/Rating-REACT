import './App.css';
import { BrowserRouter } from "react-router-dom";
import Rotas from './Routes/Rotas'
/*
import Container from './Components/Container/Container';
import Title from './Components/Title/Title';
import Description from './Components/Description/Description';

//images
import starImg from './Images/icon-star.svg';
*/
/*
      <Container>
        <div id="starLogo">
          <img src={starImg} alt="start icon"/>
        </div>
        <Title>Teste</Title>
        <Description>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Description>
        <div id="rating">
          <div data-i="1" class="box unselected">1</div>
          <div data-i="2" class="box unselected">2</div>
          <div data-i="3" class="box unselected">3</div>
          <div data-i="4" class="box unselected">4</div>
          <div data-i="5" class="box unselected">5</div>
        </div>1
      </Container>*/
function App() {
  return (
    <main>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </main>
  );
}

export default App;
