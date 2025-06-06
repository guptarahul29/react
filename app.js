const heading = React.createElement("h1", {id:"heading"}, "hello react");

     const root = ReactDOM.createRoot(document.getElementById("root"));

     

const parents = React.createElement(
    "div",{id:"parents"},
    React.createElement("child",{id : "child"},
    React.createElement("h1",{id :"heading"},"its h1"))
);
console.log(parents);

root.render(parents);    