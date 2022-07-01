
 
export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    let index 

    console.log(action)
    switch(action.type){
        case "ADD_RESTAURANT":
            return {...state, restaurants: state.restaurants.concat(action.text), ...state.restaurants, id: "TESTS"}
        case "DELETE_RESTAURANT":
            return {...state,
                restaurants: state.restaurants.filter((rest) => rest.id !== action.id)
            }
        case "ADD_REVIEW":
            return state
        case "DELETE_REVIEW":
            return state 
        default:
            return state 
    }
}
