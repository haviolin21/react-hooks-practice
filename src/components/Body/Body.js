import React from "react";
import Filter from "./Filter";
import PeopleList from "./PeopleList";
import "./Body.css";

const Body = ({ people, setCurPerson }) => {
  return (
    <div className="Body">
      <Filter />
      <PeopleList people={people} setCurPerson={setCurPerson}></PeopleList>
    </div>
  );
};

export default Body;
