import React from "react";

const PersonCard = ({ person: { firstName, lastName, age, hairColor } }) => {
  return (
    <div className="card">
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

export default PersonCard;
