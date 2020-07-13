import React, {Component} from "react";
import { Link } from "react-router-dom";
import ProductContainer from './ProductContainer';

class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    if (e.target.name === 'search') {
      this.setState({ search: e.target.value });
    }
  }

  componentDidMount() {
    fetch('/get_data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        products: data
      });
    });
  }

  render() {
    return(
      <React.Fragment>
        <div className="search">
          <h1>Products</h1>
          <form>
            <input
              type="text"
              name="search"
              onChange={this.handleChange}
              ref="search"
              placeholder="Search..."
            />
          </form>
        </div>

        <ProductContainer
          products={this.state.products}
          search={this.state.search}
        />
     
        <Link to="/" className="btn btn-link">
            Create New Product
        </Link>

      </React.Fragment>
    );
  }
}

export default Listing; 