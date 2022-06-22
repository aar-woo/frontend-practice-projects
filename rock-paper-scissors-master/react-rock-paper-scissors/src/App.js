import {useState} from 'react';
import './App.css';
import Header from './components/Header/header';
import Options from './components/OptionsComponent/options';
import Button from './components/Button/button';
import Modal from './components/Modal/modal';
import GamePlay from './components/GamePlay/gamePlay';

function App() {
  const [modalIsOpen, setModalState] = useState(false);
  const [userHand, setUserHand] = useState();

  const toggleModal = function() {
    setModalState(!modalIsOpen);
  }

  const setHand = function(hand) {
    setUserHand(hand)
  }

  return (
    <div className="App bg-primary.bg-gradient p-3 py-4 d-flex flex-column">
        <Header />
        {/* <Options /> */}
        <GamePlay />
        <Button type='rules' toggleModal={toggleModal} />
        <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
