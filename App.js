const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

root.render(heading);

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

 React Element(object) => HTML (browser understanding)
*/

const parent = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"h1 tag"),
    React.createElement("h2",{},"h2 tag")]),
    
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"h1 tag"),
    React.createElement("h2",{},"h2 tag")
    ])

);

root.render(parent);