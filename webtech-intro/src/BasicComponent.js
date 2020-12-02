import React, { Component } from "react";

class BasicComponent extends Component {
  state = {
    name: "Andrei",
    products: [
      {
        id: 0,
        name: "phone",
      },
      {
        id: 1,
        name: "notebook",
      },
      {
        id: 2,
        name: "desktop pc",
      },
      {
        id: 3,
        name: "tablet",
      },
    ],
    counter: 0,
  };

  //   constructor() {
  //     super();
  //     this.handleClickMe = this.handleClickMe.bind(this);
  //   }

  componentDidMount() {
    this.getProducts();
  }

  handleClickMe = () => {
    console.log("Click me was clicked by", this.state.name);
  };

  handleIncrement = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  handleDecrement = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  };

  getProducts = () => {
    fetch("http://localhost:8000/api/products/all")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <button onClick={this.handleClickMe}>Click me</button>

        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>

        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <table>
          <thead>
            <tr>
              <th>ProductId</th>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => {
              return (
                <tr key={product.ProductId}>
                  <td>{product.ProductId}</td>
                  <td>{product.Name}</td>
                  <td>{product.Color}</td>
                  <td>{product.Price}</td>
                  <td>{product.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BasicComponent;
