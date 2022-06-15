import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Options from './components/OptionsComponent/options';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App bg-primary.bg-gradient p-5 py-4 d-flex flex-column">
        <Header />
        <Options />
        <Button type='rules' />
    </div>
  );
}

export default App;
