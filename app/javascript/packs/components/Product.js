import React, { Component } from 'react';
import Header from './Header';
import Properties from './Properties';


class Product extends Component {

    state = {
        name: '',
        upc: '',
        available_on: '',
        propertyName: '',
        propertyValue: ''         
    }

    handleValueChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.type ===  'checkbox' ? input.checked : input.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state.name, this.state.upc, this.state.available_on, this.state.propertyName, this.state.propertyValue);
        this.setState({
            name: '',
            upc: '',
            available_on: '',
            propertyName: '',
            propertyValue: ''  
        })
    }

    handleAddProperties() {   
        
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
                        value={this.state.name}
                        onChange={this.handleValueChange}            
                    />
                </label>

                <label>
                    UPC
                    <input
                        name="upc"
                        type="number"
                        minLength='10'
                        maxLength= '13'
                        value={this.state.upc}
                        onChange={this.handleValueChange}
                    />
                </label>

                <label>
                    Available On
                    <input
                        name="available_on"
                        type="date"
                        value={this.state.available_on}
                        onChange={this.handleValueChange}
                        placeholder="mm/dd/yyyy"
                    />
                </label>

                <Header
                title="Properties"
                />

                <div className="properties">
                    <label>
                        Property Name
                        <input
                            name="propertyName"
                            type="text"
                            value={this.state.valuePropName}
                            onChange={this.handleValueChange}
                        />
                    </label>

                    <label>
                        Property Value
                        <input
                            name="propertyValue"
                            type="text"
                            value={this.state.valuePropValue}
                            onChange={this.handleValueChange}
                        />
                    </label>
                </div>
                

                {/* <Properties 
                    // handleAddProperties={this.handleAddProperties()} 
                    propertyName={this.state.propertyName}
                    propertyValue={this.state.propertyValue}
                    handleValueChange={this.handleValueChange}
                /> */}

                <div className="buttons">
                    <input
                        type="button"
                        value="Add More Properties"
                        onClick={ () => this.handleAddProperties() }
                    />

                    <input
                        type="submit"
                        value="Add Product"
                    />
                </div>
               
            </form>
        );
    };
}

export default Product;