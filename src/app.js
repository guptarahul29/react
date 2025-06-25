import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";


const AppLayout = ()=>{
    return <div className="foodApp">
        <Heading/>
        <Outlet/>
        <Footer/>
    </div>
};


const appRouter=createBrowserRouter(
    [
        {
            path : "/",
            element :<AppLayout/>,
            children:[
                {
                    path:"/",
                    element :<Body/>
                },
                {
                    path : "/aboutus",
                    element :<AboutUs/>,
                },
                {
                    path : "/contact",
                    element :<ContactUs/>,
                }
            ],
            errorElement :<Error/>,
        },
        
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


