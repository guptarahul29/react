import RestaurantCard from "./RestaurantCard";
import reslistobj from "../utils/mokedData";
import { useState } from "react";

const Body =()=>{
    const [reslist, setReslistObj]= useState(reslistobj);

return (
    <div className="body">
        <div className="search">
           <input type="text" className="search-text"></input>
           <button onClick={() =>{
            const filterList = reslist.filter(
                (res)=> res.info.avgRating > 4
            );
            setReslistObj(filterList);
           }
            
           }> Search</button>
        </div>

      <div className="res-container">
            {
                reslist.map((restaurant)=>
                    (
                    // <RestaurantCard resData={restaurant}/> not working 
                    <RestaurantCard 
                         key={restaurant.info.id} 
                            resData={restaurant} 
        />
                ))
            }
            {/* <RestaurantCard 
            resData = {reslistobj[0]} />
             <RestaurantCard 
            resData = {reslistobj[1]} />
             */}

       </div>
    </div>
)
}

export default Body;
