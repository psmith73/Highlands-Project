import React, {Component} from 'react';
import Header from './Header';
import Product from './Product';


class App extends Component {
    state = {
        products: [
            {
                name:'',
                upc: '',
                available_on: '',
                propertyName: '',
                propertyValue: ''                
            }
        ]
    };

    handleAddProduct = (name, upc, available_on, propertyName, propertyValue) => {
        this.setState( prevState => {
            return {
                products: [
                ...prevState.products,
                {
                    name,
                    upc,
                    available_on,
                    propertyName, 
                    propertyValue
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