import { Component } from "react";

class Person extends Component {
  render() {
    const { lastName, firstName, age, hairColor } = this.props.person;
    return (
      <div>
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default Person;
