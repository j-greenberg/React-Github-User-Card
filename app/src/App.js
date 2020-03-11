import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    profile: "",
    followers: []
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/j-greenberg`)
      .then(response => {
        this.setState({
          profile: response.data
        });

        console.log("Data successfully retrieved: ", response);
      })
      .catch(error => {
        console.log("Error in retrieving data: ", error);
      });

    axios
      .get(`https://api.github.com/users/j-greenberg/followers`)
      .then(response => {
        this.setState({
          followers: response.data
        });

        console.log("Followers successfully retrieved: ", this.state.followers);
      })
      .catch(error => {
        console.log("Error retrieving followers", error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Github Project</h1>
        <List profile={this.state.profile} />
        <hr></hr>
        <h1>Followers: </h1>
        {this.state.followers.map(object => (
          <Card details={object} />
        ))}
      </div>
    );
  }
}

export default App;
