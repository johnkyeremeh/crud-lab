
export const addReview = (review) => {
    return {
        type: "ADD_REVIEW", text: review
    }
}

export const deleteReview = (id) => {
    return {
        type: "DELETE_REVIEW", id: id
    }
}