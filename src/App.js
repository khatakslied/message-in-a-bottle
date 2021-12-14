import React, { useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Header from "./components/Header";

const App = () => {

const audioPlayer = AudioPlayer();

useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    audioPlayer.playNote("C4");
  };

  return (
    <div className="App">
      <h1>Message in a Bottle</h1>
      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default App;
