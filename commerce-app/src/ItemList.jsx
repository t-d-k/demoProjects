import { useState } from 'react'
import './ItemListStyles.css'
import  { itemsList } from './items';

/**
 * 
 * @param {object} params (onSelected callback)
 * @returns component
 */
function ItemList(params) {
    const [selIndex, setselIndex] = useState('');

    /**
     * 
     * @param {string} tag name of item selected
     * @param {callback} onSelected callback when selected changed
     */
    function onButton( index, onSelected) {
        setselIndex(index);
        onSelected(index);
    }
    /**
     * 
     * @returns component list of item buttons
     */
    function listItems() { 
        let res = [];
        itemsList.forEach(function(it,i) {
            res.push(<button
                class={i === selIndex?'selBtn':'btn'}
                onClick={function(){ onButton( i, params.onSelected)}}
            >{it.tag}
                </button>)

        });
        return res;
    }

    return (
        <div id="itemsDiv">
            {listItems()}
        </div>
    )
}
export default ItemList
