import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
import { addReview, deleteReview } from '../components/actions/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews restaurantID={this.props.restaurant.id}  deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}



export default connect(null, {addReview, deleteReview})(ReviewsContainer);
