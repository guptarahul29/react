import { useState ,useEffect} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu =(resId)=>{
    
    const [resInfo, setRestaurant] = useState(null);
    
    useEffect (()=>{
        fetchData();
    },[]);

    const fetchData =async()=>{
        const data = await fetch(MENU_API + resId);
        const json= await data.json();
        setRestaurant(json.data);

    }
   return resInfo;
}

export default useRestaurantMenu;