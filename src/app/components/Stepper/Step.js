import React from "react";
import PropTypes from "prop-types";

import { StepItem } from "./styledStepper";

function Step({ title }) {
  return <StepItem>{title}</StepItem>;
}

Step.propTypes = {
  title: PropTypes.string
};

export default Step;
