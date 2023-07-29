import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './Components/Introduction';
import MyProjects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Gardening</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
