import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import GameOption from './components/GameOption/gameOption';

function App() {
  return (
    <div className="App bg-primary.bg-gradient">
      <Header />
      <GameOption hand='rock'/>
      <GameOption hand='paper'/>
      <GameOption hand='scissors'/>    
    </div>
  );
}

export default App;
