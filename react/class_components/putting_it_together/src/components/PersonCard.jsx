import { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.person.age,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { lastName, firstName, hairColor } = this.props.person;
    return (
      <div className="card">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.handleClick}>
          Birthday Buton for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
