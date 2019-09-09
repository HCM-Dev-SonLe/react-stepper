import styled from "styled-components";

import {
  PRIMARY,
  PRIMARY_LIGHT,
  PRIMARY_RGB,
  CL_BLACK,
  BLACK
} from "components/Theme/Colors";

const StepWrapper = styled.div`
  width: 100%;
  z-index: 1;
`;

const StepStyled = styled.ul`
  counter-reset: step;
  width: 100%;
  ${({ direction }) =>
    direction !== "vertical" &&
    `
      display: flex;
  justify-content: center;`}
`;

const StepItem = styled.li`
  width: 15%;
  padding: 16px;
  position: relative;
  list-style-type: none;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  :last-child:after {
    content: none;
  }

  :hover, :active, :visited {
    background-color: ${CL_BLACK};
    > span {
      color: ${BLACK};
      font-weight: bold;
    }

  }
  :after {
    content: "";
    position: absolute;
    background: ${PRIMARY_LIGHT};
    top: 10px;
    left: 5%;
    z-index: -1;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }

  :before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    height: 20px;
    font-size: 12px;
    border: 2px solid ${PRIMARY_LIGHT};
    display: inline-block;
    margin: 0 10px auto auto;
    border-radius: 100%;
    line-height: 20px;
    background: white;
    color: ${PRIMARY};
    text-align: center;
    font-weight: 600;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }

  ${({ direction }) =>
    direction === "vertical"
      ? `
    height: 60px;
    text-align: left;
    
    :before {
      display: inline-block;
      margin: 0 10px auto auto;
    }

    :after {
      width: 3px;
      height: 100%;
      top: 30px;
      left: 13%;
    }`
      : `
    float: left;
    text-align: center;
    
    :before {
    display: block;
    margin: 0 auto 10px auto;
  }

  :after {
    width: 100%;
    height: 3px;
    top: 25px;
    left: 50%;
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
      box-shadow: ${isLastElm ? `0 0 6px ${PRIMARY_RGB}` : "none"};
      border: 2px solid ${PRIMARY};
      background: ${PRIMARY};
      color: white;
    }
  `}
`;

export { StepWrapper, StepStyled, StepItem };
