import { useEffect, useState } from 'react'
import './BasketStyles.css'
import { itemsList } from './items';
import basketIcon from './basket-yellow.png';
import shopBasket from './shopBasket';

/**
 * 
 * @param {object} params (onSelected callback)
 * @returns component
 */
function BasketList(params) {
    // const [theBasket, settheBasket] = useState(new shopBasket());

  
    return (
        <div id="basketDiv">
            <img id='basket' src={basketIcon} alt="basket" />
            <span id='total'>{params.theBasket.getTotal()}</span>
            <span id='count'>{params.count}</span>
        </div>
    )
}
export default BasketList
