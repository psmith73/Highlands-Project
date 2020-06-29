import React, {Component} from 'react';
import Header from './Header';
import Product from './Product';


class App extends Component {
    state = {
        products: [
            {
                name:'phone',
                upc: 1234567890,
                available_on: '07/17/2021'
            }
        ]
    };

    handleAddProduct = (name, upc, available_on) => {
        this.setState( prevState => {
            return {
                products: [
                ...prevState.products,
                {
                    name,
                    upc,
                    available_on
                }
                ]
            }
        })
    }

    render() {
        return (
            <div className="product-form">
                <Header 
                    title="Product"
                />

                <Product
                    addProduct={this.handleAddProduct}
                />
            </div>
        );
    }
}

export default App;