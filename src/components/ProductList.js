import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import storeProducts from "../data.json";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import AboutOwner from "./AboutOwner";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  console.log(value);
                  return value.products.map(product => (
                    <Product key={product.id} product={product} />
                  ));
                }}
              </ProductConsumer>
            </div>
            <Link to="/aboutowner" className="nav-link" Component={AboutOwner}>
              <p className="text-center">About the owner</p>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
