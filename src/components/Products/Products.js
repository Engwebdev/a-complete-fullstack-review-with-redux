import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  componentDidMount() {
    axios.get('/api/products').then(response => {
      console.log(response.data);
    });
  }
  render() {
    return <div />;
  }
}

export default Products;
