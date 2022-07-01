import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;

    const deleteOnClick = (event) => {
      this.props.deleteReview(this.props.review.id)
    }

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleclick}> X </button>
      </div>
    );
  }

};

export default Review;
