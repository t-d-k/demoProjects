import './ItemDetailsStyles.css'
import { itemsList } from './items'

/**
 * 
 * @param {object} params contents = details to show
 * @returns details div component
 */
function ItemDetails(params) {
    function addItem(i){
        console.log('add itme: '+ i)
        params.onAdd(i)
    }
   /**
    * 
    * @param {integer} i - index into item list or -1 for no item
    * @returns item html
    */
    function getDetails(i) {
        if (i >= 0) {
            const res = [<span class='desc'>{itemsList[i].description}</span>];
            res.push(<span class='price'>{itemsList[i].getPrice()}</span>);
            res.push(<button class='buy' onClick={function(){addItem(i)}}>Buy</button>);
            return res;            
        } else {
            return <span>Please select an item</span>
        }
    }

    {/* <span class='price'>{getPrice(params.index)}</span> */ }


    return (
        <div id="detailsDiv">
            {getDetails(params.index)}
        </div>
    )
}
export default ItemDetails
