import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/ducks/productsReducer';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { isLoading, products } = this.props;
    const productsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      products.map(product => {
        return <p>{product.name}</p>;
      })
    );

    return <div>{productsDisplay}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
