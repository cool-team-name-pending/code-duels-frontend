import React from "react";
import { Link } from "react-router-dom";
import "./Contest.css";

const Contest = (props) => {
  console.log(props);
  const _renderProblems = () => {
    return props.problems.map((problem) => {
      return (
        <li className="collection-item" key={problem.index}>
          <Link
            to={`/contest/index=${problem.index}`}
          >{`${problem.index}. ${problem.name}`}</Link>
        </li>
      );
    });
  };
  return (
    <div className="container" id="problem-set">
      <ul className="collection with-header" id="problems">
        <li className="collection-header">
          <h4 className="red-text">Problems</h4>
        </li>
        {_renderProblems()}
      </ul>
    </div>
  );
};

export default Contest;
