import React from 'react';


const Properties = (props) => {

    
    return(
        <div className="properties">
            <label>
                Property Name
                <input
                    name="propertyName"
                    type="text"
                    value={props.propertyName}
                    onChange={props.handleValueChange}
                />
            </label>

            <label>
                Property Value
                <input
                    name="propertyValue"
                    type="text"
                    value={props.propertyValue}
                    onChange={props.handleValueChange}
                />
            </label>

            <input
                type="button"
                value="Add More Properties"
                onClick={() => props.handleAddProperties}
            />
        </div>
    )
}



export default Properties;