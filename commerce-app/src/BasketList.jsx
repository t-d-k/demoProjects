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
    return (
        <div id="basketDiv">
            <img id='basket' src={basketIcon} alt="basket" />
            <span id='basketDetails'>
                <span id='total'>{params.theBasket.getTotal()}</span>
                <span id='count'>{params.count} Items</span>
            </span>
        </div>
    )
}
export default BasketList
