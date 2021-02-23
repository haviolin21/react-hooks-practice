import React from "react";
import { Link } from "react-router-dom";

const Person = ({ person, setCurPerson }) => {
  return (
    <div className="Person">
      <Link to="/user/:id" onClick={() => setCurPerson(person)}>
        {person.name}
      </Link>
      <div>{person.company.name}</div>
      <div>{person.email}</div>
      <div>{person.phone}</div>
    </div>
  );
};

export default Person;
