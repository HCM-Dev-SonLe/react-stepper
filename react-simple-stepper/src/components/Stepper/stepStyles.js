import styled from 'styled-components';

import { PRIMARY } from '../Theme/Colors';

const StepWrapper = styled.div`
  width: 100%;
  z-index: 1;
`;

const StepStyled = styled.ul`
  counter-reset: step;
  width: 100%;
  ${({ direction }) =>
    direction !== 'vertical' &&
    `
      display: flex;
  justify-content: center;`}
`;

const StepItem = styled.li`
  width: 15%;
  position: relative;
  list-style-type: none;

  :last-child:after {
    content: none;
  }

  ${({ direction }) =>
    direction === 'vertical'
      ? `
    height: 60px;
    text-align: left;
    :before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    height: 20px;
    font-size: 12px;
    border: 1px solid #bebebe;
    display: inline-block;
    margin: 0 10px auto auto;;
    border-radius: 50%;
    line-height: 20px;
    background: white;
    color: #bebebe;
    text-align: center;
    font-weight: bold;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  :after {
    content: '';
    position: absolute;
    width: 3px;
    height: 100%;
    background: #979797;
    top: 10px;
    left: 5%;
    z-index: -1;
  }`
      : `
    float: left;
    text-align: center;
    :before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    height: 20px;
    font-size: 12px;
    border: 1px solid #bebebe;
    display: block;
    margin: 0 auto 10px auto;
    border-radius: 100%;
    line-height: 20px;
    background: white;
    color: #bebebe;
    text-align: center;
    font-weight: bold;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    -webkit-transition: background .3s;
    transition: background .3s;
  }

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: #979797;
    -webkit-transition: background .3s;
    transition: background .3s;
    top: 10px;
    left: 50%;
    z-index: -1;
  }`}

  ${({ active, isLastElm, isShowStepTail, bgColor }) =>
    active &&
    `
    :after {
      background: ${!isLastElm && !isShowStepTail && (bgColor || PRIMARY)};
      -webkit-transition: background .3s;
      transition: background .3s;
    }
    :before {
      border-color: ${PRIMARY};
      background: ${PRIMARY};
      color: white;
    }
  `}
`;

export { StepWrapper, StepStyled, StepItem };
