import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Side_bar';
import Player from './Components/Player';
import Display from './Components/Display';
import { useContext } from 'react';
import { PlayerContext } from './Context/PlayerContext';


function App() {

  const {audioRef,track} = useContext(PlayerContext)


  return (
    <div className="h-screen bg-black">
      <div className='h-[90%] flex'>
        <SideBar />
        <Display/>
      </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;