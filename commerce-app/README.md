
# UX
Your objective is to create a front-end for an E-Commerce application using React, with any theme of your choosing (E.g. book store, video game store, etc.). The app will show you a list of items for sale, and allow the user to add them to a shopping basket, which shows the total price of all the items in the basket. You can go beyond this scope if you wish, e.g. having different categories of items.

Your application must have a quality User Experience design. Create a UX document where you will:

- Perform a simple competitor analysis
- Generate user problem statements and convert them to how we might statements
- Generate potential colour schemes with considerations for target audience and sector

## Discussion
Pen store

### competitor analysis
competitors:
https://cultpens.com
inkursive.com

### user problem statements

[A user] needs [need] in order to accomplish [goal]

An enthusiast needs to find if a particular pen is available.
A novice needs to browse pen features in order to choose an approriate gift.
A causual looker needs to browse pictures to find out if a fountain pen is for them.

### How Might We statements
How might we allow an experienced user to find the pen they need quickly.
How might We allow a user to easily find the features they need.
How Might We let a user compare pictures of products easily

### colour schemes

#### four colour
    Rich Gold: #d4af37 
    Deep Burgundy: #800020 
    Royal Purple: #6a0dad 
    Soft Cream: #f5f5dc  -background
#### three colour
    Elegant Black: #000000 - background
    Regal Gold: #ffd700 
    Royal Purple: #800080 


## Code
### Implementation requirements

You must include at least two components. I suggest you have a component for displaying an item on the store, and another for displaying the shopping list. Consider how you'll use callback functions within the item display component. Remember, state should be declared at the highest level its needed, so the basket and items will be declared in app.js for most of you.

You must model your data using classes, like you have done for other projects this week. Include two classes, one for modelling an item, and another for the basket list. The item class must have a function that returns its price in the format £XX, and the basket must have a function that returns the total price of all items in the basket. These functions must be documented and unit tested with atleast two tests. You may find it helpful to create UML class diagrams for these classes.


### Extension exercises

- Have the basket group items together. E.g. if the user adds two of the same item, rather than displaying two things in the basket, display that item once with a 2 next to it.
- Have the basket and item list on different pages. If your using the basic react template, you could achieve this with conditional rendering. If you are using NextJs, you could use routing.
- Include multiple categorys of items that the user can switch between. E.g. if your site is selling books, include tabs to filter between different generes. This could be achieved either with a more complex data structure, or by using arrays filter method