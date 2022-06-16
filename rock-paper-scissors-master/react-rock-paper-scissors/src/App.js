import {useState} from 'react';
import './App.css';
import Header from './components/Header/header';
import Options from './components/OptionsComponent/options';
import Button from './components/Button/button';
import Modal from './components/Modal/modal';

function App() {
  const [modalIsOpen, setModalState] = useState(false);
  const toggleModal = function() {
    setModalState(!modalIsOpen);
  }

  return (
    <div className="App bg-primary.bg-gradient p-5 py-4 d-flex flex-column">
        <Header />
        <Options />
        <Button type='rules' toggleModal={toggleModal} />
        <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
