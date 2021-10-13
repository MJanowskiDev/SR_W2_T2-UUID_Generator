import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [keyV4, setKeyV4] = useState(uuidv4());
  const refreshKey = () => {
    setKeyV4(uuidv4());
  };
  return (
    <div className='App'>
      <h1>Generator UUID V4</h1>
      <div className='uuidKey'>
        <p>Twój kod UUID:</p>
        <h2 className='uuidKey__header'>{keyV4}</h2>
        <p className='uuid__paragraph--footer'>
          Odśwież stronę aby wygenerować nowy klucz, lub kliknij przycisk
          poniżej.
        </p>
        <button className='uuidKey__button' onClick={refreshKey}>
          Generuj
        </button>
      </div>
    </div>
  );
}

export default App;
