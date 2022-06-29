import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/header';
import Options from './components/OptionsComponent/options';
import Button from './components/Button/button';
import Modal from './components/Modal/modal';
import GamePlay from './components/GamePlay/gamePlay';

function App() {
  const [modalIsOpen, setModalState] = useState(false);
  const [userHand, setUserHand] = useState('');
  const [compHand, setCompHand] = useState('');

  const toggleModal = function() {
    setModalState(!modalIsOpen);
  }

  const setHand = (event) => {
    const option = event.target.closest('a');
    const selectedHand = option.getAttribute('value');
    setUserHand(selectedHand)
  }

  useEffect(() => {
    const hands = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * (3))
    setCompHand(hands[randNum]);
  }, [userHand])

  let view;

  userHand ? view = <GamePlay userHand={userHand} compHand={compHand} setUserHand={setHand} /> : view = <Options setUserHand={setHand} />
  

  return (
    <div className="App bg-primary.bg-gradient p-3 py-4 d-flex flex-column">
        <Header />
        {view}
        <Button type='rules' handleClick={toggleModal} />
        <Modal modalIsOpen={modalIsOpen} handleClick={toggleModal} />
    </div>
  );
}

export default App;
