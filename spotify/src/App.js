import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Side_bar';
import Player from './Components/Player';


function App() {
  return (
    <div className="h-screen bg-black">
      <div className='h-[90%] flex'>
        <SideBar />
      </div>
        <Player/>
    </div>
  );
}

export default App;