import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import Properties from './Properties'

class Form extends Component {
    state = {
        name:'',
        upc:'',
        available_on:'', 
        properties: [{property_name:'', property_value:''}]
    }

    constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.propertyChange = this.propertyChange.bind(this);
  } 

    // stripHtmlEntities(str) {
    //     return String(str)
    //         .replace(/</g, "&lt;")
    //         .replace(/>/g, "&gt;");
    // }

    addProperties = () => {
        this.setState({
            properties: [
                ...this.state.properties, 
                {
                    property_name: '', 
                    property_value: ''
                }
            ] 
        })
    }

    propertyChange (index,property) {
        const newProperties = [...this.state.properties];
        newProperties[index] = property;
        this.setState({properties: newProperties})
    }

    onChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.type ===  'checkbox' ? input.checked : input.value;
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/products/create";
        const { name, upc, available_on } = this.state;
        const {property_name, property_value} = this.state.properties;
    
        // if (name.length == 0 || upc.length == 0 || available_on.length == 0 || property_name.length == 0 || property_value.length == 0)
        //   return;
    
        const body = {
          name,
          upc,
          available_on,
          properties: [{property_name, property_value}]
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
        //   .then(response => this.props.history.push(`/product/${response.id}`))
          .catch(error => console.log(error.message));
    }



    render() {
        return (
            <div className='product-form'>
                <Header 
                    title='create a product'
                />

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="productName">Product name</label>
                        <input
                        type="text"
                        name="name"
                        id="productName"
                        className="form-control"
                        required
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productUpc">UPC</label>
                        <input
                        type="text"
                        name="upc"
                        id="productUpc"
                        className="form-control"
                        required
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productAvailable">Available On</label>
                        <input
                            type='date'
                            className="form-control"
                            id="productAvailable"
                            name="available_on"
                            required
                            onChange={this.onChange}
                        />
                    </div>

                    <Header
                        title="Properties"
                    />
                
                    {this.state.properties.map((property,index) => (
                        <Properties 
                        index={index}
                        property={property}
                        handleChange={this.propertyChange}
                        key={index.toString()} 
                        propertyName={this.state.properties.property_name}
                        propertyValue={this.state.properties.property_value}
                        onChange={this.onChange}
                        />
                    ))}

                    {/* <div className="form-group">
                        <label htmlFor="productPropertyName">Property Name</label>
                        <input
                        type="text"
                        name="property_name"
                        id="productPropertyName"
                        className="form-control"
                        required
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPropertyValue">Property Value</label>
                        <input
                        type="text"
                        name="property_value"
                        id="productPropertyValue"
                        className="form-control"
                        required
                        onChange={this.onChange}
                        />
                    </div> */}

                    <button
                        type="button"
                        value="Add More Properties"
                        className="button"
                        onClick={this.addProperties}> 
                    Add More Properties
                    </button>

                    <button 
                    type="submit" 
                    value="Create Product"
                    className="button"
                    onClick={this.onSubmit}
                    >
                        Create Product
                    </button>
                </form> 

                <Link
                    to="/listing"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                View Products
                </Link>
            </div>
        )
    }
}

export default Form;