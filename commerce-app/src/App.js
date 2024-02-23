import { useState } from 'react';
import './App.css';
import ItemDetails from './ItemDetails';
import ItemList from './ItemList';
import item, { getDetailsFromTag } from './items';

function App() {
  const [index, setIndex] = useState(-1)

  /**
   * callback when the selected button is changed
   * @param {string} tag the concept name
   */
  function doSelected(index) {
    setIndex(index);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Pen Island - all the pens</h1>
      </header>
      <div id='main'>
        <ItemList onSelected={doSelected}></ItemList>
        <ItemDetails index={index}></ItemDetails>

      </div>
    </div>
  );
}

export default App;
