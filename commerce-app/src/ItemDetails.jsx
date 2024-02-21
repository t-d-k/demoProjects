import './ItemDetailsStyles.css'

/**
 * 
 * @param {object} params contents = details to show
 * @returns details div component
 */
function ItemDetails(params) {

    return (
        <div id="detailsDiv"> {params.contents}  </div>
    )
}
export default ItemDetails
