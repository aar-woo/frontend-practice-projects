import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import GameOption from './components/GameOption/gameOption';

function App() {
  return (
    <div className="App bg-primary.bg-gradient">
      <Header />
      <div className="row">
        <div className="col-12 d-flex justify-content-evenly">
          <GameOption hand='paper'/>
          <GameOption hand='scissors'/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <GameOption hand='rock'/>
        </div>
      </div>
    </div>
  );
}

export default App;
