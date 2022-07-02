import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
import { addReview, deleteReview } from '../components/actions/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}  restaurantID={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews}  deleteReview={this.props.deleteReview} restaurantID={this.props.restaurant.id}/>
      </div>
    )
  }
}


const mapStateToProps  = (state) => {
  return {
    reviews: state.reviews
  }
}


export default connect(mapStateToProps, {addReview, deleteReview})(ReviewsContainer);
