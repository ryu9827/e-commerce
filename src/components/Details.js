import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <React.Fragment>
              <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* end of title */}
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} alt={title} className="img-fluid" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$ {price}</span>
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about the product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div className="row">
                      <Link to="/">
                        <ButtonContainer>
                          <div className="text">Back to Product</div>
                        </ButtonContainer>
                      </Link>
                      {/* <Link> */}
                      <ButtonContainer
                        cart
                        disabled={inCart}
                        onClick={() => {
                          return value.addToCart(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
                {/* end of product infor */}
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}
