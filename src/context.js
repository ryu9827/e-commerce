import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct:detailProduct,
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = ()=>{
        let tempArr = [];
        storeProducts.forEach(item=>{
            let tempItem = {...item};
            tempArr.push(tempItem)
        })
        this.setState(()=>{return {products:tempArr}},()=>{
            console.log(this.state.products)
        }) 
    }

    handleDetail = ()=>{
        console.log('hello from handle details');
    }

    addToCart = (id)=>{
        console.log(`You have add id number ${id} inCart`);
    }

  render() {
    return (
        <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart}}>
            {/* <button onClick={this.tester}>tester</button> */}
            {this.props.children}
        </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};