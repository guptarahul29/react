import React, { createElement } from "react";
import ReactDOM from "react-dom/client";


const Heading = ()=>{
    return (
        <div className="heading">
            <div >
               <img className="logo"src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"> 
               </img>
            </div>
            <div className="nav-bars">
                <ul>
                    <li> Home  </li>
                    <li> About  </li>
                    <li> Contact Us  </li>
                    <li> Cart  </li>
                </ul>

            </div>
        </div>
    )
}



const reslistobj =[
    {
        "type": "Restaurant",
        "info": {
          "id": "193543",
          "name": "Firangi Bake",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/a7298eb8-fd36-4b7f-bda7-03b647ae1602_193543.jpg",
          "locality": "Nr Navyug College, Rander Road",
          "areaName": "Adajan Patiya",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Mexican",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "3952",
          "avgRatingString": "4.2",
          "totalRatingsString": "680",
          "promoted": true,
          "adTrackingId": "cid=30065671~p=1~adgrpid=30065671#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=193543~plpr=COLLECTION~eid=f24704f0-ae93-4a92-8d79-d7195a109f7f~srvts=1749826135583~collid=83631",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-06-13 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "shortDescription": "options available",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": ""
                    }
                  }
                ]
              },
              "textBased": {},
              "imageBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
         
         
        }
      },
      {
        type: "Restaurant",
        info: {
          id: "81280",
          name: "Geetha Restaurant",
          cloudinaryImageId: "wa9jikx4ncecv5lst36j",
          locality: "New Textile Market",
          areaName: "Ring Road",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Punjabi",
            "South Indian"
          ],
          avgRating: 4.5,
          parentId: "86918",
          avgRatingString: "4.5",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          availability: {
            nextCloseTime: "2025-06-13 22:30:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.pngImage preview",
                description: "Delivery!"
              }
            ]
          }
        }
      
    }  ,
    
    
]
  


const RestaurantCard =(props)=>{
   const {resData}= props;
   const {name,locality,cuisines,avgRating}= resData.info;
   const {deliveryTime}= resData.info.sla;
    return (
        <div className="res-card">
            <img className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/6a328a84-014a-402d-9a6a-3dd634b0239e_565293.JPG"></img>
            <div className="dish-info">
                <h3>{name}</h3>
                <h5>{locality}</h5>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} </h4>
            </div>
        </div>
    )
}
const Body =()=>{
return (
    <div className="body">
        <div className="search">
           <input type="text" className="search-text"></input>
           <h2> Search</h2>
        </div>
      <div className="res-container">
            {
                reslistobj.map((restaurant)=>
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





const AppLayout = ()=>{
    return <div className="foodApp">
        <Heading/>
        <Body/>
    </div>
}

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


