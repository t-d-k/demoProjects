/**
 * represents a concept to explain
 */
class item {
    constructor(tag, details) {
        this.tag = tag;
        this.details = details;
    }
}
/*
 * the data to display 
 */
export const itemsList = [
        new item(' Montblanc Meisterstück Le Petit Prince Solitaire Fountain Pen',' Crafted by Montblanc, this exquisite fountain pen is part of the Le Petit Prince collection, inspired by the beloved novella by Antoine de Saint-Exupéry. With a platinum-coated cap and barrel, adorned with a deep blue lacquer and a fox emblem, this pen exudes elegance and sophistication. The 18K gold nib ensures a smooth writing experience, making it a perfect choice for discerning writers and collectors alike.'),
        new item('Pilot Custom 823 Fountain Pen',' The Pilot Custom 823 is a masterpiece of Japanese craftsmanship, featuring a translucent amber barrel that showcases the pen\'s internal mechanisms. Equipped with a vacuum filling system, this pen has a generous ink capacity, perfect for long writing sessions. The 14K gold nib offers a precise and responsive writing experience, making it a favorite among fountain pen enthusiasts.'),
        new item(' Pelikan M800 Souverän Fountain Pen',' Handcrafted in Germany, the Pelikan M800 Souverän fountain pen is renowned for its timeless design and exceptional performance. Featuring a resin barrel with elegant gold-plated trim, this pen exudes luxury and sophistication. The 18K gold nib delivers a smooth and consistent writing experience, making it a cherished writing instrument for professionals and enthusiasts alike.'),
        new item(' Lamy 2000 Fountain Pen',' Sleek and minimalist, the Lamy 2000 fountain pen is a modern classic loved by writers and designers worldwide. Crafted from durable Makrolon fiberglass and stainless steel, this pen offers a comfortable and ergonomic writing experience. The unique hooded nib design ensures smooth ink flow and effortless writing, while the piston filling system allows for easy refilling with bottled ink.'),
        new item(' Visconti Homo Sapiens Bronze Age Fountain Pen',' Inspired by the ancient Homo Sapiens, this fountain pen from Visconti features a unique lava resin barrel that is virtually unbreakable and resistant to heat and scratches. The bronze trim adds a touch of elegance and sophistication to the pen\'s rugged aesthetic. Equipped with a 23K palladium Dreamtouch nib, this pen provides a luxurious and indulgent writing experience, making it a prized possession for fountain pen aficionados.')
];

/**
 * 
 * @param {string} tag get the details to display from the concept name
 * @returns 
 */
export function getDetailsFromTag(tag) {
    return itemsList.find(el => el.tag === tag).details;
}

export default item;
