import { useState } from 'react'
import './ItemListStyles.css'
import  { itemsList } from './items';

/**
 * 
 * @param {object} params (onSelected callback)
 * @returns 
 */
function ItemList(params) {
    const [selTag, setselTag] = useState('');

    /**
     * 
     * @param {string} tag name of item selected
     * @param {callback} onSelected callback when selected changed
     */
    function onButton( tag, onSelected) {
        setselTag(tag);
        onSelected(tag);
    }
    /**
     * 
     * @returns component list of item buttons
     */
    function listItems() { 
        let res = [];
        itemsList.forEach(it => {
            res.push(<button
                class={it.tag === selTag?'selBtn':'btn'}
                onClick={function(){ onButton( it.tag, params.onSelected)}}
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
