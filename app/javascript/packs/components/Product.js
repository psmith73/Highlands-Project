import React, { Component } from 'react';
// import Properties from './properties';

class Product extends Component {

    state = {

        name: '',
        upc: '',
        available_on: ''
    }

    handleValueChange = (e) => {

        const name = e.target.name;
        const upc = e.target.upc;
        const available = e.target.available_on;
        const value = e.target.value;

        this.setState({
            [name]: {
                value
            },
            [upc]: {
                value
            },
            [available]: {
                value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state.name.value, this.state.upc.value, this.state.available_on.value);
        this.setState({
            name: {value:''},
            upc: {value:''},
            available_on:{value:''},

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
                        value={this.state.name.value}
                        onChange={this.handleValueChange}            
                    />
                </label>

                <label>
                    UPC
                    <input
                        name="upc"
                        type="text"
                        value={this.state.upc.value}
                        onChange={this.handleValueChange}
                        label="UPC"
                    />
                </label>

                <label>
                    Available On
                    <input
                        name="available_on"
                        type="text"
                        value={this.state.available_on.value}
                        onChange={this.handleValueChange}
                        placeholder="mm/dd/yyyy"
                    />
                </label>

                {/* <Properties /> */}

                <input
                    type="submit"
                    value="Add Product"
                 />
            </form>
        );
    }
}

export default Product;