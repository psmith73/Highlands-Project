import React from 'react';
import Properties from './Properties';

const MessageContainer = props => {
    if (props.properties) {
        return (
            <div className="error_container">
                <h4>Something went wrong! Please check the following items.</h4>
                <ul>
                    <li>Product name must be unique.</li>
                    <li>Upc must be either 10,12 or 13 numbers in length, only numbers, and unique.</li>
                    <li>Availability date must be in the future.</li>
                    <li>Property name must be unique</li>
                </ul>
            </div>
        );
    }
    if (props.saved) {
        return (
            <div className="error_container">
                <h4>Your product was saved!</h4>
            </div>
        );
    }

    return null;
};

export default MessageContainer;