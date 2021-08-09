import React, { Component } from "react";
import "./Fetch.css";
class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(e => e.json())
      .then(item => {
        this.setState({
          data: item
        });
      })
      .catch(e => {
        this.setState({
          error: e
        });
      });
  }
  render() {
    const { data, error } = this.state;
    return (
      <div className="container">
        {error ? (
          <div>{error}</div>
        ) : (
          <table className="table table-bordered">
            <thead className="thead-dark text-color">
              <tr>
                {data.length && Object.keys(data[0]).map(i => <th>{i}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.address.street}, {item.address.suite},
                    {item.address.city}
                  </td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Fetch;
