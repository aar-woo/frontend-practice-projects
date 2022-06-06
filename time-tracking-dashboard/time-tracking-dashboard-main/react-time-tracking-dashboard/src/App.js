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
    <div className="App">
      <div className='container d-lg-flex flex-row flex-wrap p-2 justify-content-center'>
        <div className='col-lg-3'>
          <ProfileCard handleInterval={changeInterval} currInterval={interval}/>
        </div>
        <div className='col-lg-8 d-lg-flex flex-wrap align-content-between'> 
          <TimeCard category="work"/>
          <TimeCard category="play" />
          <TimeCard category="study" />
          <TimeCard category="exercise" />
          <TimeCard category="social" />
          <TimeCard category="selfCare" />
        </div>
      </div>
    </div>
  );
}

export default App;
