import React from "react";
import Person from "./Person";

const PeopleList = ({ people, setCurPerson }) => {
  return (
    <div className="PeopleList">
      {people.map((el, idx) => (
        <Person key={idx} person={el} setCurPerson={setCurPerson} />
      ))}
    </div>
  );
};

export default PeopleList;
