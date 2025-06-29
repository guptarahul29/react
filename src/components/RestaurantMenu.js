import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    const { resId } = useParams();
    const  resInfo = useRestaurantMenu(resId);

if(resInfo===null) return <Shimmer/>;

const {name,areaName,costForTwoMessage,cuisines,city} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
return (
    <div className="menu">
      <div className="menu-datails">
      <h1>{name}</h1>
            <h4>{areaName}-{city}</h4>
            <h4>{costForTwoMessage}</h4>
            <h3>{cuisines.join(", ")} </h3>
            <h1>
               Recommanded Menu 
            </h1>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>
                 ))}
            </ul>
      </div>
    </div>
  );
}  
export default RestaurantMenu;