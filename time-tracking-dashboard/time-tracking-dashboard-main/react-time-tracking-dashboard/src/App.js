import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProfileCard from './Components/ProfileCard/profileCard';
import TimeCard from './Components/TimeCard/timeCard';


function App() {
  return (
    <div className="App container-fluid">
      <ProfileCard />
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
