import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/ducks/productsReducer';
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
      this.props.addProduct({ name, description, price, image_url });
      this.props.history.replace('/products');
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addProduct }
)(NewProduct);
