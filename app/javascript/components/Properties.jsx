import React, { Component } from 'react';

class Properties extends Component {

    onChange = (e) => {
        const newProperty = {...this.props.property};
        newProperty[e.target.name] = e.target.value;
        this.props.handleChange(this.props.index, newProperty);
    }

    render() {
        return(
                <div className="properties">
                     <div className="form-group">
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
                    </div>
                </div>
            )
    }    
}



export default Properties;