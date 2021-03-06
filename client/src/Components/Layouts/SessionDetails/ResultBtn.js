import React, { Component } from "react";


import {
  ResultsBtn,
  Navlink,
} from "./styledComponents";

class ResultBtn extends Component {
  render() {
    const { id, type } = this.props;
    return (
      <ResultsBtn>
        <Navlink to={`/session/details/${id}/${type}`}> Survey Results </Navlink>
      </ResultsBtn>
    );
  }
}

export default ResultBtn;
