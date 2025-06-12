import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = createElement(
    "h1",
    {id : "heading"},
    "hello react");

const jsxheading=<h1>react</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));


//React functional components
const Heading1 = ()=>{

    return <h1><Texting/>hello buddy</h1>
}

const Texting = ()=>{
    return <font > <h2> i am font h2</h2></font>
}

const Heading2 = ()=>{
    return <div>
      <Heading1 />  
      <Texting/>
      {heading}
    
    <h1 className="abcd">hello buddy 2</h1>
    </div>
}



console.log(heading);

console.log(jsxheading);

// for components </>
root.render(<Heading2/>);


