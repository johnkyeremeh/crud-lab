import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const restaurant = {
      ...this.state,
      text: this.state.text
    }

    this.props.addRestaurant(restaurant)

    this.setState({
      text: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            name="text"
            placeholder='type restaurant name'
            value={this.state.restaurant}
            onChange={this.handleChange}
            />
            <input type="submit" />
        </form>
        {this.state.restaurant}
      </div>
    );
  }
};

export default RestaurantInput;
