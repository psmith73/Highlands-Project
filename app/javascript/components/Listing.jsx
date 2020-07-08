import React, {Component} from "react";
import { Link } from "react-router-dom";

class Listing extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        const url = "/api/v1/products/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ products: response }))
          .catch(() => this.props.history.push("/"));
    }

    render() {
        const { products } = this.state;
        const allProducts = products.map((product, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <ul className="list-group">
                <li className="list-group-item">{product.name}</li>
                <li className="list-group-item">{product.upc}</li>
                <li className="list-group-item">{product.available_on}</li>
                <li className="list-group-item">{product.property_name}</li>
                <li className="list-group-item">{product.property_value}</li>
            </ul>
          </div>
        ));
        const noProduct = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No products yet. Why not <Link to="/">create one</Link>
            </h4>
          </div>
        );
    
        return (
            <main className="container">
                <div className="text-right mb-3">
                    <Link to="/" className="btn custom-button">
                    Create New Product
                    </Link>
                </div>
                <div className="row">
                    {products.length > 0 ? allProducts : noProduct}
                </div>
                <Link to="/" className="btn btn-link">
                    Create New Product
                </Link>
            </main>
        );
      }
}

export default Listing;