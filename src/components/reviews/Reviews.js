import React, { Component } from 'react';
import Review from './Review';


//filter by review and only show ones that belong to to it.


class Reviews extends Component {



  render() {
    const {reviews, restaurantID, deleteReview} = this.props

    const reviewFilter =  reviews.filter(review => review.restaurantID === restaurantID)
    console.log("rest value", reviewFilter)
    return (
      <ul>
        {reviewFilter.map(review => < Review key={review.id} review={review} deleteReview={deleteReview} restaurantID={this.props.restaurantID} />)}
        {/* <Review review={this.props.review}/> */}
      </ul>
    );
  }
};

export default Reviews;