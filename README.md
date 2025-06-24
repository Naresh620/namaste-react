# Namaste React 

# parcel
- Dev Build
- Local Server
------
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- compress
- consisten cashing
- code Splitting
- Diffrential Bundling - support older Browser
- Diagonastic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- different dev and prod bundle

# fundamental
   - // {
/* The following line can be included in your src/index.js or App.js file */
// }
// import "bootstrap/dist/css/bootstrap.min.css";
// import RestaurentCard from "./RestaurentCard";

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

/*
<div id="parent">
    <div id="child">
        <h1>h1 tag </h1>
        <h2>h2 tag </h2>
    </div>
     <div id="child2">
        <h1>h1 tag </h1>
        <h2>h2 tag </h2>
    </div>
</div>

*/
/*
const parent = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"This is a Namaste react "),
    React.createElement("h2",{},"h2 tag")]),
    
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"h1 tag"),
    React.createElement("h2",{},"h2 tag")
    ])

);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);

*/
// jsx (transpiled befor reaches js) - parecel-Babel
//jsx Bable transpiles it to create React Element => React Elemnt (js object) => HTMLElement render

/*
React Element
const jsxheading=(
<h1 id="heading" className="root">
    Namaste React
</h1>);

console.log(jsxheading);

React Two type of compont/
class component
functional component

React Functional Component
const Title = () => (
    <h1 className="root" tabIndex={5} id="heading">Namaste react using jsx</h1>
);
const Headingcomponent = () =>( 
    <div id="container">
        {Title()}
        {<Title/>}
        <h1 id="heading">Namaste react using Functional Component</h1>
    </div>
);

# Food Deliver APP
 - Header
    - logo
    - navi-item
 - Body
    - Search bar
    - Restaurant Container
       - Restaurant Card
 - Footer
    - CopyRight
    - Link
    - contact
    - Address




# Two type of export:
  - default export => (export default componet;)
  - Name export => export component;

# React Hooks
  - (Noraml javaScript utility Function)
  - useState() - superpowerful state variable
  - useEffect()

                            new version     old version
Reconciliation Algorithm (React Fiber) - (React16 new)
                           \->ew way find the dif and updating the DOm
res container      |           []
    []             |           /|\
    /|\            |          [][][]
[][][][][][][]     |        3  filter Rc
7 Rc               |
                   |
 virtual Dom is a representation of Actual DOM
 
 <div>                             {  Virtual DOM             
    <div>   ----> Actual DOM            -------
     <img>                                  }

Diff Algorithm -> clicked ->  
res container      |           []
    []             |           /|\
 / / | \ \ \       |          [][][]
[][][][][][][]     |        3Rc
7 Rc               |
                   |
  Old VirtualDOM               New Virtaul Dom




# 2 types Routing in Web Apps
 - Client side routing
 - Serve side routing

# Redux Toolkit
 - install @reduxjs/toolkit and react-redux
 - build our store
 - connect our store to our app
 - slice(cartslice)
 - dispatch(action)
 - selector

 # types of testing (developer)
  - unite testing
  - integerating Testing
  - End to End testing 

 # Setting up Testing in our app
  - Install React tetsing Library
  - Installed jest
  - Install babel dependenceies
  - configure babel
  - configure parcel config file to disable default babel transpiltaion
  - jest  -npx jest --init
  - install jsdom library
  - Install @babel/preset-react - to make JSK work in test cases
  - Include @babel/present=react inside my babel config
  - npm i -D @testing=library/jest-dom