import React from "react";
import Card from "./Card";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: this.props.followers
    };
  }

  render() {
    return (
      <div>
        <h2>{console.log(this.props.profile)}</h2>
        <Card details={this.props.profile} />
        {console.log(
          "Followers passed in!: ",
          this.props,
          this.state.followers
        )}
        {/* {this.state.followers.map(object => (
          <Card details={object} />
        ))} */}
      </div>
    );
  }
}

export default List;
