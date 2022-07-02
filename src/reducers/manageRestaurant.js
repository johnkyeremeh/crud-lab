import { combineReducers } from "redux";

import cuid from 'cuid';
export const cuidFn = cuid;

const rootReducer = combineReducers({
    restaurants: restaurantReducer, 
    reviews: reviewsReducer
});

export default rootReducer



function restaurantReducer(state = [], action){
    let idx;

    console.log(action)
    console.log(state)
    switch(action.type){
        case "ADD_RESTAURANT":
            
            return state.concat(action.text)
        case "DELETE_RESTAURANT":   
            idx = state.findIndex(restaurant => restaurant.id === action.id )
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        default:
            return state 
    }   
}

////find the restaruant and state
////
function reviewsReducer(state = [], action){
    let idx;
    console.log(action)
    switch(action.type){
        case "ADD_REVIEW":
            
            const review = { text: action.text, restaurantID: action.restaurantID, id: cuidFn() };
            console.log("NEW REVIEW", review)
            return [...state, review]
        case "DELETE_REVIEW":   
            idx = state.findIndex(review => review.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        default:
            return state 
    }   
    
    
}
 

//state = {} 
// Reviews is array of object reviews and look through restaurant that has the ID
//  function manageRestaurants(state = {
//     restaurants: [],
//     reviews: []
// }, action) {

//     let idx; 

// pass in all your restarueants and reviews.
//restarurant = state. restaurants.find(where restaurantID == resturant.ID)
//update the restraunt with 
//

//     console.log(action)
//     switch(action.type){
//         case "ADD_RESTAURANT":
//             return {...state,
//                  restaurants: state.restaurants.concat(action.text),
//                  reviews: [...state.reviews]
//                 }
//         case "DELETE_RESTAURANT":
//             return {...state,
//                 reviews: [...state.reviews],
//                 restaurants: state.restaurants.filter((rest) => rest.id !== action.id)
//             }
//         case "ADD_REVIEW":
//             return {
//                 ...state,
//                 restaurants: [...state.restaurants],
//                 reviews: [...state.reviews, action.text]
//             }
//         case "DELETE_REVIEW":
//             idx = state.restaurants.findIndex(res => res.id === action.id)

//             return {
//                 ...state,
//                 restaurants: [...state.books],
//                 reviews: [...state.reviews.slice(0, idx), ...state.reviews.slice(idx + 1)]
//             }
//         default:
//             return state 
//     }
// }
