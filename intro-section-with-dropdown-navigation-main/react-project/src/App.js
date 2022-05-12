import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import AppDrawer from './components/AppDrawer/appDrawer';
import {useState} from 'react';
import Hero from './components/Hero/hero';


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setDrawerState = (event) => {
    if (!drawerOpen && event.target.matches('.overlay')) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <div className='page'>
        <div className='container'>
          <Header handleDrawer={setDrawerState} />
          <AppDrawer handleDrawer={setDrawerState} drawerState={drawerOpen}/>
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
