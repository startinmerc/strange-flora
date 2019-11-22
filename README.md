# Strange Fauna

## [Landing Page](https://strange-fauna.herokuapp.com/)

#### A full-stack  site built on:

| React        | Node.js | Redux      |
| ------------ |---------|------------|
| React-Router | MongoDB | Custom CSS |
| Heroku       |         |            |

An eCommerce site built for my portfolio, part of the Strange Industries Network.
The site is built on React using Node, built entirely from scratch.
It uses extensive components and state management for full interactivity.

#### Site Structure Plan:
```
+-- Header
+-- Footer
+-- Landing Page/Home Page
+-- Product Listings
| +-- Product Detail
| | +-- Description
| | +-- Photos
| | +-- Ratings & Comments
| | +-- Quantity selection
| | +-- Add to basket
| | +-- Add to wishlist
| `-- Pagination
+-- About Page
| +-- FAQ
| +-- Disclaimer
| +-- Returns
| `-- Delivery
```

Version logs for the project are below...

---

### V0.1.0

#### Initial design choices
* Define display & body fonts
* Define color palette
* Mock up main page to display choices
* Transfer choices to `:root`

#### Page mockup
* [Mock up main page on Codepen](https://codepen.io/startinmerc/pen/JjPVGJo)
* Add sections menu skeleton
* [Add submenu from Codepen](https://codepen.io/startinmerc/pen/oNNxRNx)

### V0.2.0

#### REACT_ROUTER
* Install react-router
* npm install
* import components

#### Implement router components
* wrap app
* wrap relevant switches
* replace internal links with components
* rearrange file structure as needed

#### Begin Products listings
* create seeds based on readme model
* create product list component
* dynamically render based on url
* split into seperate files

#### Product Cards
* Create Product Card component
* Style product cards
* Add components for cart/wish buttons
* Basic conditional rendering click functions

#### Product List Grid
* Add buttons for list layout options
* Put layout in ProductList state
* swap out styling

### V0.2.1

#### Mini Menu
* Add Mini Menu component to header
* Style
* Show/hide as required

#### Header Nav
* Add nav component to header
* Show/hide as required

#### Nav
* Refactor Landing Submenu component for reuse in header
* Reorganise files as needed
* Factor out components from new Nav

#### Misc
* Make section/colors object global

### V0.2.2

#### About Pages Templates
* About Page
* FAQ Page
* Delivery Page
* Returns Page
* Disclaimer Page

#### Redux Pt/1
* install redux
* add to App.js,create store
* add basic rootReducer

#### Redux Pt.2
* add actionCreators for add/remove
* import to HeaderButton
* pass as props to MiniBasketItem

#### Redux Pt.3
* import actionCreators to ProductCard
* basic add to cart/wish
* conditional formatting
* advanced add/remove

### V0.3

#### Cart
* add Cart + Wish page components
* change header buttons to links to above

