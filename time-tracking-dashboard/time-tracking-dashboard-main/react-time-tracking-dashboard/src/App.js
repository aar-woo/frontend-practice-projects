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
    <div className="App container-fluid">
      <ProfileCard handleInterval={changeInterval} />
      <TimeCard category="work" />
      <TimeCard category="play" />
      <TimeCard category="study" />
      <TimeCard category="exercise" />
      <TimeCard category="social" />
      <TimeCard category="selfCare" />
    </div>
  );
}

export default App;
