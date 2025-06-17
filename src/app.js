import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";


const AppLayout = ()=>{
    return <div className="foodApp">
        <Heading/>
        <Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


