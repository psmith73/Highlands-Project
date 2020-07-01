import React from 'react';

const Listing = (props) => {

    const name = props.name;
    const upc = props.upc;
    const available = props.available;
    const propertyName = props.propertyName;
    const propertyValue = props.propertyValue;


    return(
        <ul>
            <li>Name: { name }</li>
            <li>UPC: { upc }</li>
            <li>Available On: { available }</li>
            <li>Properties: ( { propertyName }: { propertyValue } )</li>
        </ul>
    )
}

export default Listing;