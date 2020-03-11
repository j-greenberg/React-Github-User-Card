import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {console.log(this.props.details)}
        <h2>Login: {this.props.details.login}</h2>
        <h3>URL: {this.props.details.url}</h3>
        <h4>Followers: {this.props.details.followers}</h4>
        <hr></hr>
      </div>
    );
  }
}

export default Card;
