/*
*   <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
        <div id="child">
            <h1></h1>
        </div>
    </div>
*
*/

const parent = React.createElement("div", {id: "parent"},
    [
        React.createElement( "div", {id: "child1"},
            [
                React.createElement( "h1",{},"I am the H1 tag"),
                React.createElement( "h2",{},"I am the H2 tag")
            ]
        ),
        React.createElement( "div", {id: "child2"},
            [
                React.createElement( "h1",{},"I am the H1 tag"),
                React.createElement( "h2",{},"I am the H2 tag")
            ]
        )
    ]
);

// JAX
// We don't require that above type of method in React, instead of we use JAX

console.log(parent);


// const heading = React.createElement("h1", {id: "heading"}, "React.js Developer");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);