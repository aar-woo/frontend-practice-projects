import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProfileCard from './Components/ProfileCard/profileCard';
import TimeCard from './Components/TimeCard/timeCard';

function App() {
  return (
    <div className="App container-fluid">
      <ProfileCard />
      <TimeCard />
    </div>
  );
}

export default App;
