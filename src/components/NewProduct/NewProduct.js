import React, { Component } from 'react';
import axios from 'axios';

class NewProduct extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    image_url: ''
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, description, price, image_url } = this.state;
    if (name && description && price && image_url) {
      axios
        .post('/api/products', {
          name,
          description,
          price,
          image_url
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log(response);
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.name}
            onChange={this.onChangeHandler}
            name="name"
            placeholder="name"
            type="text"
          />
          <input
            value={this.state.description}
            onChange={this.onChangeHandler}
            name="description"
            placeholder="description"
            type="text"
          />
          <input
            value={this.state.price}
            onChange={this.onChangeHandler}
            name="price"
            placeholder="price"
            type="text"
          />
          <input
            value={this.state.image_url}
            onChange={this.onChangeHandler}
            name="image_url"
            placeholder="image_url"
            type="text"
          />
          <button>Add Product</button>
        </form>
      </div>
    );
  }
}

export default NewProduct;
