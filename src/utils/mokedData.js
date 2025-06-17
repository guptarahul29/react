import { useState } from "react";

const reslistobj =
  [
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
  
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "451118",
      "name": "Laziz Pizza",
      "cloudinaryImageId": "u79j4vqdu3evefvqwpnd",
      "locality": "Sagrampura",
      "areaName": "Sagrampura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Snacks",
        "Pastas",
        "Fast Food",
        "Street Food"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "2299",
      "avgRatingString": "4.2",
      "totalRatingsString": "3.6K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-15 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {},
          "imageBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "logoCtx": {
          "text": "BENEFITS"
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.2",
          "ratingCount": "27"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
      "link": "swiggy://menu?restaurant_id=451118&source=collection&query=Pizza",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  },
//ss



{
  
      "@type": "Restaurant",
      "info": {
        "id": "675028",
        "name": "Crusto's - Cheese Burst Pizza By Olio",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/ab29dfa2-e650-40ec-9693-a3800a4a74b4_675028.jpgImage preview",
        "locality": "Halwawala Point",
        "areaName": "Jivkor Nagar Co.Op.Hs",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3,
        "veg": true,
        "parentId": "268955",
        "avgRatingString": "4.4",
        "totalRatingsString": "832",
        "promoted": true,
        "adTrackingId": "cid=30153142~p=0~adgrpid=30153142#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=675028~plpr=COLLECTION~eid=a66bcb63-a9a1-4cfb-96b5-0e9a1364937b~srvts=1749913476482~collid=83631",
        "sla": {
          "deliveryTime": 57,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "55-65 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-15 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.pngImage preview",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {},
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.pngImage preview"
                  }
                }
              ]
            },
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "65% OFF",
          "subHeader": "UPTO ₹125",
          "headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {},
          "commsStyling": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "30153142"
      },
      "analytics": {},
      "cta": {
        "link": "swiggy://menu?restaurant_id=675028&source=collection&query=Pizza",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
  
    
  
    
 
{
  
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "441714",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "ndknyqh3yz3qu5ohrhhu",
        "locality": "rajmarg",
        "areaName": "Bhagal",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "4961",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.8K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-06-15 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.pngImage preview",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {},
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Pizza.pngImage preview",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {},
          "commsStyling": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "swiggy://menu?restaurant_id=441714&source=collection&query=Pizza",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
   
 





  //fdsfsd

  {
    
        "@type": "Restaurant",
        "info": {
          "id": "451119",
          "name": "Laziz Pizza",
          "cloudinaryImageId": "u79j4vqdu3evefvqwpnd",
          "locality": "Sagrampura",
          "areaName": "Sagrampura",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas",
            "Burgers",
            "Snacks",
            "Pastas",
            "Fast Food",
            "Street Food"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "2299",
          "avgRatingString": "4.2",
          "totalRatingsString": "3.6K+",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-06-15 00:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.2",
              "ratingCount": "27"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=451118&source=collection&query=Pizza",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      
      
    
  
  
  ]



// const reslistobj2 =[
//     {
//         "type": "Restaurant",
//         "info": {
//           "id": "193543",
//           "name": "Firangi Bake",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/a7298eb8-fd36-4b7f-bda7-03b647ae1602_193543.jpg",
//           "locality": "Nr Navyug College, Rander Road",
//           "areaName": "Adajan Patiya",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//             "Pizzas",
//             "Pastas",
//             "Italian",
//             "Mexican",
//             "Healthy Food",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 4.2,
//           "parentId": "3952",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "680",
//           "promoted": true,
//           "adTrackingId": "cid=30065671~p=1~adgrpid=30065671#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=193543~plpr=COLLECTION~eid=f24704f0-ae93-4a92-8d79-d7195a109f7f~srvts=1749826135583~collid=83631",
//           "sla": {
//             "deliveryTime": 30,
//             "lastMileTravel": 3.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "3.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2025-06-13 23:59:00",
//             "opened": true
//           },
//           "badges": {
//             "textExtendedBadges": [
//               {
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available",
//                 "fontColor": "#7E808C"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textExtendedBadges": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "shortDescription": "options available",
//                       "fontColor": "#7E808C",
//                       "iconId": "guiltfree/GF_Logo_android_3x",
//                       "description": ""
//                     }
//                   }
//                 ]
//               },
//               "textBased": {},
//               "imageBased": {}
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "orderabilityCommunication": {
//             "title": {},
//             "subTitle": {},
//             "message": {},
//             "customIcon": {},
//             "commsStyling": {}
//           },
         
         
//         }
//       },
//       {
//         type: "Restaurant",
//         info: {
//           id: "81280",
//           name: "Geetha Restaurant",
//           cloudinaryImageId: "wa9jikx4ncecv5lst36j",
//           locality: "New Textile Market",
//           areaName: "Ring Road",
//           costForTwo: "₹300 for two",
//           cuisines: [
//             "North Indian",
//             "Punjabi",
//             "South Indian"
//           ],
//           avgRating: 4.5,
//           parentId: "86918",
//           avgRatingString: "4.5",
//           totalRatingsString: "1.4K+",
//           sla: {
//             deliveryTime: 21,
//             lastMileTravel: 2.4,
//             serviceability: "SERVICEABLE",
//             slaString: "20-25 mins",
//             lastMileTravelString: "2.4 km",
//             iconType: "ICON_TYPE_EMPTY"
//           },
//           availability: {
//             nextCloseTime: "2025-06-13 22:30:00",
//             opened: true
//           },
//           badges: {
//             imageBadges: [
//               {
//                 imageId: "Rxawards/_CATEGORY-North%20Indian.pngImage preview",
//                 description: "Delivery!"
//               }
//             ]
//           }
//         }
      
//     }  ,
    
//     {
//       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//       "info": {
//         "id": "451118",
//         "name": "Laziz Pizza",
//         "cloudinaryImageId": "u79j4vqdu3evefvqwpnd",
//         "locality": "Sagrampura",
//         "areaName": "Sagrampura",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas",
//           "Burgers",
//           "Snacks",
//           "Pastas",
//           "Fast Food",
//           "Street Food"
//         ],
//         "avgRating": 4.2,
//         "veg": true,
//         "parentId": "2299",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "3.6K+",
//         "sla": {
//           "deliveryTime": 37,
//           "lastMileTravel": 2.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2025-06-15 00:00:00",
//           "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "textBased": {},
//             "imageBased": {},
//             "textExtendedBadges": {}
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120",
//           "logoCtx": {
//             "text": "BENEFITS"
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {},
//           "subTitle": {},
//           "message": {},
//           "customIcon": {},
//           "commsStyling": {}
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//           }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {},
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "3.2",
//             "ratingCount": "27"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {},
//       "cta": {
//         "link": "swiggy://menu?restaurant_id=451118&source=collection&query=Pizza",
//         "text": "RESTAURANT_MENU",
//         "type": "DEEPLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
//       "relevance": {
//         "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//         "sectionId": "MENU_RETURN_FOOD"
//       }
//     },
// //ss



//   {
    
//         "@type": "Restaurant",
//         "info": {
//           "id": "675028",
//           "name": "Crusto's - Cheese Burst Pizza By Olio",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/ab29dfa2-e650-40ec-9693-a3800a4a74b4_675028.jpgImage preview",
//           "locality": "Halwawala Point",
//           "areaName": "Jivkor Nagar Co.Op.Hs",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Pizzas",
//             "Pastas",
//             "Italian",
//             "Fast Food",
//             "Snacks",
//             "Beverages",
//             "Desserts"
//           ],
//           "avgRating": 4.4,
//           "veg": true,
//           "parentId": "268955",
//           "avgRatingString": "4.4",
//           "totalRatingsString": "832",
//           "promoted": true,
//           "adTrackingId": "cid=30153142~p=0~adgrpid=30153142#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=675028~plpr=COLLECTION~eid=a66bcb63-a9a1-4cfb-96b5-0e9a1364937b~srvts=1749913476482~collid=83631",
//           "sla": {
//             "deliveryTime": 57,
//             "lastMileTravel": 5.5,
//             "serviceability": "SERVICEABLE",
//             "slaString": "55-65 mins",
//             "lastMileTravelString": "5.5 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2025-06-15 05:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.pngImage preview",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {},
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.pngImage preview"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {}
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "65% OFF",
//             "subHeader": "UPTO ₹125",
//             "headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
//             "logoCtx": {
//               "text": "BENEFITS"
//             }
//           },
//           "orderabilityCommunication": {
//             "title": {},
//             "subTitle": {},
//             "message": {},
//             "customIcon": {},
//             "commsStyling": {}
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {},
//               "video": {}
//             }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {},
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           "campaignId": "30153142"
//         },
//         "analytics": {},
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=675028&source=collection&query=Pizza",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//       },
    
      
    
      
   
//   {
    
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         "info": {
//           "id": "441714",
//           "name": "La Pino'z Pizza",
//           "cloudinaryImageId": "ndknyqh3yz3qu5ohrhhu",
//           "locality": "rajmarg",
//           "areaName": "Bhagal",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Pizzas",
//             "Pastas",
//             "Italian",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 4.3,
//           "veg": true,
//           "parentId": "4961",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "3.8K+",
//           "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 0.5,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "0.5 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2025-06-15 00:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.pngImage preview",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {},
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Pizza.pngImage preview",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {}
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100",
//             "logoCtx": {
//               "text": "BENEFITS"
//             }
//           },
//           "orderabilityCommunication": {
//             "title": {},
//             "subTitle": {},
//             "message": {},
//             "customIcon": {},
//             "commsStyling": {}
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {},
//               "video": {}
//             }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {},
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {},
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=441714&source=collection&query=Pizza",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//       },
     
   





//     //fdsfsd

//     {
      
//           "@type": "Restaurant",
//           "info": {
//             "id": "451119",
//             "name": "Laziz Pizza",
//             "cloudinaryImageId": "u79j4vqdu3evefvqwpnd",
//             "locality": "Sagrampura",
//             "areaName": "Sagrampura",
//             "costForTwo": "₹350 for two",
//             "cuisines": [
//               "Pizzas",
//               "Burgers",
//               "Snacks",
//               "Pastas",
//               "Fast Food",
//               "Street Food"
//             ],
//             "avgRating": 4.2,
//             "veg": true,
//             "parentId": "2299",
//             "avgRatingString": "4.2",
//             "totalRatingsString": "3.6K+",
//             "sla": {
//               "deliveryTime": 37,
//               "lastMileTravel": 2.4,
//               "serviceability": "SERVICEABLE",
//               "slaString": "35-40 mins",
//               "lastMileTravelString": "2.4 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2025-06-15 00:00:00",
//               "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "textBased": {},
//                 "imageBased": {},
//                 "textExtendedBadges": {}
//               }
//             },
//             "aggregatedDiscountInfoV3": {
//               "header": "60% OFF",
//               "subHeader": "UPTO ₹120",
//               "logoCtx": {
//                 "text": "BENEFITS"
//               }
//             },
//             "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {},
//               "commsStyling": {}
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {},
//                 "video": {}
//               }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//               "aggregatedRating": {
//                 "rating": "3.2",
//                 "ratingCount": "27"
//               },
//               "source": "GOOGLE",
//               "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//           },
//           "analytics": {},
//           "cta": {
//             "link": "swiggy://menu?restaurant_id=451118&source=collection&query=Pizza",
//             "text": "RESTAURANT_MENU",
//             "type": "DEEPLINK"
//           },
//           "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//         },
        
        
      
    
    
// ]

export default reslistobj;