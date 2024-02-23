import { useState } from 'react';
import './App.css';
import ItemDetails from './ItemDetails';
import ItemList from './ItemList';
import BasketList from './BasketList';
import shopBasket from './shopBasket';
import { itemsList } from './items';


function App() {
  const [index, setIndex] = useState(-1)
  const [theBasket, settheBasket] = useState(new shopBasket());
  const [count, setCount] = useState(0);
  /**
   * callback when the selected button is changed
   * @param {string} tag the concept name
   */
  function doSelected(index) {
    setIndex(index);
  }
  /**
   * 
   * @param {integer} i - index of item to add in itemsList
   */
  function doAdd(i) {
    theBasket.addItem(itemsList[i]);
    setCount(count+1);
  }
  
  return (
    <div className="App">
      <header className="header">
        <h1>Pen Island - all the pens</h1> 
        <BasketList theBasket={theBasket} count={count}></BasketList>
      </header>
      <div id='main'>
        <ItemList onSelected={doSelected}></ItemList>
        <ItemDetails index={index} onAdd={doAdd}></ItemDetails>

      </div>
    </div>
  );
}

export default App;
