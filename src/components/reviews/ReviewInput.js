import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantID)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            />
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
