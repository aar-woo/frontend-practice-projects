import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProfileCard from './Components/ProfileCard/profileCard';
import TimeCard from './Components/TimeCard/timeCard';
import {useState} from 'react';

function App() {
  const [interval, setInterval] = useState('weekly');

  const changeInterval = (event) => {
    event.preventDefault();
    const intervalSelected = event.target.getAttribute("value");
    setInterval(intervalSelected);
  }

  return (
    <div className="App d-flex">
      <div className='container d-lg-flex flex-row flex-wrap p-2 justify-content-center my-auto'>
        <div className='col-lg-3'>
          <ProfileCard handleInterval={changeInterval} currInterval={interval}/>
        </div>
        <div className='col-lg-8 d-lg-flex flex-wrap align-content-between'> 
          <TimeCard category="work" currInterval={interval} />
          <TimeCard category="play" currInterval={interval} />
          <TimeCard category="study" currInterval={interval} />
          <TimeCard category="exercise" currInterval={interval} />
          <TimeCard category="social" currInterval={interval} />
          <TimeCard category="selfCare" currInterval={interval} />
        </div>
      </div>
    </div>
  );
}

export default App;
