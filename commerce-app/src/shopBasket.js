
import { item } from "./items";
class shopBasket {
    constructor() {
        this.total = 0;
        this.count = 0;
    }
    /**
     * add an item to the basket
     * @param {integer} item - the item to add
     */
    addItem(itemToAdd) {
        this.count++;
        this.total += itemToAdd.price;
        console.log('add item: ' + this.total)
    }
    /**
     * 
     * @returns the total as a string
     */
    getTotal() {
        // add £
        const formatter = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        });
        return formatter.format(this.total);
    }
}
export default shopBasket;