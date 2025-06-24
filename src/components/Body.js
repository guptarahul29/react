import RestaurantCard from "./RestaurantCard";
import reslistobj from "../utils/mokedData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
    const [reslist, setReslistObj]= useState([]);
    const [filterreslist, filtersetReslistObj]= useState([]);


    const [searchRestaurant, setsearchRestaurant] = useState("");
    console.log("Body render");

    useEffect(()=>{
        console.log("useEffect Called") ;
        fetchData(); 
    },
    []
);

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.19810&lng=72.82980&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    )
const json = await data.json();

const restaurantCards = json?.data?.cards
      ?.filter((card) => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
      .map((card) => card.card.card);

      filtersetReslistObj(restaurantCards); 
      setReslistObj(restaurantCards);

}; 
// ternari operater here

return reslist && reslist.length===0 ? (<Shimmer/>) :(
    <div className="body">
        <div className="search">
           <input type="text" className="search-text" 
           value={searchRestaurant}
           onChange={(e)=>{
                setsearchRestaurant(e.target.value)
           }}>
           
           </input>
           <button onClick={()=>{
                console.log(searchRestaurant);
                const filteredResList = reslist.filter(
                    (res)=>
                        res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
                );
                filtersetReslistObj(filteredResList);
                
            
           }}> Search</button>

        <button onClick={() =>{
            const filterList = reslist.filter(
                (res)=> res.info.avgRating > 4.2
            );
            setReslistObj(filterList);
           }
            
           }>Top Restaurant</button>

        </div>

      <div className="res-container">
            {//reslist
                filterreslist.map((restaurant)=>
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
