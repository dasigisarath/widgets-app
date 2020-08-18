import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is a React ?",
    content: "React is a front end js framework",
  },
  {
    title: "what is java ?",
    content: "java is the best oop language ever",
  },
  {
    title: "what is Python ?",
    content: "Python is a powerfull pograming language",
  },
];

export default () => {
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
