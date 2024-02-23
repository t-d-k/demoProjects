import './ItemDetailsStyles.css'
import { itemsList } from './items'

/**
 * 
 * @param {object} params contents = details to show
 * @returns details div component
 */
function ItemDetails(params) {
    function getDesc(i) {

        // console.log(itemsList[i].details);
        // return JSON.stringify(itemsList[i].details);
        return itemsList[i].description;

    }
    function getDetails(i) {
        if (i >= 0) {
            let res = [<span class='desc'>{itemsList[i].description}</span>];
            res.push(<span class='price'>£{itemsList[i].price}</span>);
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
