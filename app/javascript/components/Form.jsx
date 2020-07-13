import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import Properties from './Properties'
import MessageContainer from './MessageContainer';


class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          upc: '',
          availableOn: '',
          propertyName: '',
          propertyValue: '',
          properties: [],
          error: false,
          saved: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
    if (e.target.name === 'name') {
        this.setState({ name: e.target.value });
    }
    if (e.target.name === 'upc') {
        this.setState({ upc: e.target.value });
    }
    if (e.target.name === 'date') {
        this.setState({ availableOn: e.target.value });
    }
    if (e.target.name === 'propertyName') {
        this.setState({ propertyName: e.target.value });
    }
    if (e.target.name === 'propertyValue') {
        this.setState({ propertyValue: e.target.value });
    }
    }
    
    //sends data to POST route.
    submitData = () => {
        fetch(`/send_data`, {
            method: 'POST',
            body: JSON.stringify({
            name: this.state.name,
            upc: this.state.upc,
            availableOn: this.state.availableOn,
            properties: this.state.properties
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(response => {
         
            if (response.status !== 204) {
            this.setState({ error: true });
            return;
            } else {
           
            this.refs.name.value = '';
            this.refs.upc.value = '';
            this.refs.date.value = '';
            this.setState({
                name: '',
                upc: '',
                availableOn: '',
                propertyName: '',
                propertyValue: '',
                properties: [],
                error: false,
                saved: true
            });
            
            setTimeout(() => {
                this.setState({ saved: false });
            }, 5000);
            }

            return response.json;
        });
    };
    
   
    clickHandler = (e) => {
        e.preventDefault();
        if (e.target.id === 'save') {
            this.submitData();
        }
        if (e.target.id === 'properties') {
            this.updateProperties();
        }
    };
    
   
    updateProperties = (e) => {
        const propertyObj = {
          name: this.state.propertyName,
          value: this.state.propertyValue
        };
      
        this.setState({ properties: this.state.properties.concat(propertyObj) });
        this.setState({ propertyName: '' });
        this.setState({ propertyValue: '' });
        this.refs.propertyName.value = '';
        this.refs.propertyValue.value = '';
    };



    render() {
        return (
            <React.Fragment>
                <MessageContainer
                properties={this.state.error}
                saved={this.state.saved}
                />

                <div className='product-form'>
                    <Header 
                        title='create a product'
                    />

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Product name</label>
                            <input
                            type="text"
                            ref="name"
                            name="name"
                            className="form-control"
                            required
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>UPC</label>
                            <input
                            type="text"
                            ref="upc"
                            name="upc"
                            className="form-control"
                            required
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Available On</label>
                            <input
                                type='text'
                                className="form-control"
                                name="date"
                                ref="date"
                                placeholder="mm/dd/yyyy"
                                required
                                onChange={this.handleChange}
                            />
                        </div>

                        <Header
                            title="Properties"
                        />
                        <div className="property_container">
                            <div className="form-group">
                                <label>Property Name</label>
                                <input
                                type="text"
                                name="propertyName"
                                ref="propertyName"
                                className="form-control"
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Property Value</label>
                                <input
                                type="text"
                                name="propertyValue"
                                ref="propertyValue"
                                className="form-control"
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button 
                        className="button"
                        id="properties" 
                        onClick={this.clickHandler}>
                        Add Properties
                        </button>

                        <button 
                        className="button"
                        id="save" 
                        onClick={this.clickHandler}>
                        Save
                        </button>
                    </form> 

                    <Properties 
                    properties={this.state.properties} 
                    />

                    <Link
                        to="/listing"
                        className="btn btn-lg custom-button"
                        role="button"
                    >
                    View Products
                    </Link>

                </div>
                
            </React.Fragment>
            
        )
    }
}

export default Form;