
// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//         React.createElement("h1", {}, "I am H1 tag")
//     )
// );


// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//         [React.createElement("h1", {}, "I am H1 tag"), React.createElement("h2", {}, "I am H2 tag")]
//     )
// );

const parent = React.createElement(
    "div",
    {id : "parent"},
    [React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1", {}, "I am H1 tag"), React.createElement("h2", {}, "I am H2 tag")]
    ), 
    React.createElement(
        "div",
        {id : "child2"},
        [React.createElement("h1", {}, "I am H1 tag"), React.createElement("h2", {}, "I am H2 tag")]
    )]
);



const heading = React.createElement(
    "h1", 
    {id : "heading"}, 
    "Hello React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(() => {
    root.render(parent);
},3000);

// root.render(parent);
