import React from 'react';
import PropTypes from 'prop-types';
import { StepItem } from './stepStyles';

function Step({ active, title }) {
  return <StepItem active={active}>{title}</StepItem>;
}
Step.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
};

export default Step;
