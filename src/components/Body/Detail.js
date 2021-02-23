import React from "react";

const Detail = ({ curPerson }) => {
  console.log(curPerson);
  return (
    <div>
      <div>{curPerson.name}</div>
      <div>{curPerson.company.catchPhrase}</div>
      <div>{curPerson.company.bs}</div>
    </div>
  );
};

export default Detail;
