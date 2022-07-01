import cuid from 'cuid';


export const addReview = (review) => {
    return {
        type: "ADD_REVIEW", text: review
    }
}

export const deleteReview = (id, restaurantID) => {
    return {
        type: "DELETE_REVIEW", id: id, restaurantID: restaurantID
    }
}