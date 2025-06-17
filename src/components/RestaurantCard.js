import reslistobj from "../utils/mokedData";

const RestaurantCard =(props)=>{
   const {resData}= props;
   const {name,locality,cuisines,avgRating,costForTwo}= resData.info;
   const {deliveryTime}= resData.info.sla;
    return (
        <div className="res-card">
            <img className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/6a328a84-014a-402d-9a6a-3dd634b0239e_565293.JPG"></img>
            <div className="dish-info">
                <h2>{name}</h2>
                <h5>Location : {locality}</h5>
            <h4>Cuisines : {cuisines.join(", ")} </h4>
            <h4>CostForTwo : {costForTwo}</h4>
            <h4>Avg Rating : {avgRating}</h4>
            <h4>Delivery time : {deliveryTime} min </h4>
            </div>
        </div>
    )
}


export default RestaurantCard;