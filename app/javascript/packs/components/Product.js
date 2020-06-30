import React, { Component } from 'react';
import Header from './Header';
// import Property from './property';
// import ProductProperty from './productproperty';

class Product extends Component {

    state = {
        products: {        
            name: {
                value: ''
            },
            upc: {
                value: ''
            },
            available_on: {
                value: ''
            },
            propertyName:{
                value: ''
            },
            propertyValue:{
                value: ''
            }        
        }
       
    }

    handleValueChange = (e) => {

        const name = e.target.name;
        const upc = e.target.upc;
        const available = e.target.available_on;
        const propertyName = e.target.propertyName;
        const propertyValue = e.target.propertyValue;
        const value = e.target.value;

        this.setState({
            products: {
                ...this.state.products,
                [name]: {
                    ...this.state.products[name],
                    value
                },
                [upc]: {
                    ...this.state.products[upc],
                    value
                },
                [available]: {
                    ...this.state.products[available],
                    value
                },
                [propertyName]: {
                    ...this.state.products[propertyName],
                    value
                },
                [propertyValue]: {
                    ...this.state.products[propertyValue],
                    value
                }
            }  
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state.products.name.value, this.state.products.upc.value, this.state.products.available_on.value, this.state.products.propertyName.value, this.state.products.propertyValue.value);
        this.setState({
            products: {        
                name: {
                    value: ''
                },
                upc: {
                    value: ''
                },
                available_on: {
                    value: ''
                },
                propertyName: {
                    value: ''
                },
                propertyValue:{
                    value: ''
                }        
            }

        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        name="name"
                        type="text"
                        min='0'
                        max='1024'
                        value={this.state.products.name.value}
                        onChange={this.handleValueChange}            
                    />
                </label>

                <label>
                    UPC
                    <input
                        name="upc"
                        type="number"
                        minCharacters='10'
                        maxCharacters= '13'
                        value={this.state.products.upc.value}
                        onChange={this.handleValueChange}
                    />
                </label>

                <label>
                    Available On
                    <input
                        name="available_on"
                        type="date"
                        value={this.state.products.available_on.value}
                        onChange={this.handleValueChange}
                        placeholder="mm/dd/yyyy"
                    />
                </label>

                <Header
                title="Properties"
                />

                <label>
                    Property Name
                    <input
                        name="propertyName"
                        type="text"
                        value={this.state.products.propertyName.value}
                        onChange={this.handleValueChange}
                    />
                </label>

                <label>
                    Property Value
                    <input
                        name="propertyValue"
                        type="text"
                        value={this.state.products.propertyValue.value}
                        onChange={this.handleValueChange}
                    />
                </label>

                {/* <Property /> */}

                {/* <ProductProperty /> */}
                <div className="buttons">
                    <input
                        type="button"
                        value="Add More Properties"
                    />

                    <input
                        type="submit"
                        value="Add Product"
                    />
                </div>
               
            </form>
        );
    }
}

export default Product;