import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { StepWrapper, StepStyled, StepItem } from "./styledStepper";

class Step extends PureComponent {
  state = {
    actives: [this.props.activeStepKey]
  };

  generateActiveKey = activeKey => {
    const { activeStepKey } = this.props;
    const activeKeys = [];
    for (let i = activeStepKey; i <= activeKey; i += 1) {
      activeKeys.push(i);
    }
    return activeKeys;
  };

  checkRenderTail = (elements, index) => {
    const nextElement = elements[index + 1];
    if (nextElement !== null && nextElement !== undefined) {
      const { disabled } = nextElement.props;
      return disabled;
    }
    return false;
  };

  handleChangeActive = (event, elm) => {
    const { disabled, activeKey } = elm.props;
    if (!disabled) {
      this.props.onChange(event, activeKey);
      this.setState({ actives: this.generateActiveKey(activeKey) });
    }
    return null;
  };

  render() {
    const { children, direction } = this.props;
    const { actives } = this.state;

    return (
      <StepWrapper>
        <StepStyled direction={direction}>
          {React.Children.map(children, (elm, index) => {
            if (!React.isValidElement(elm)) {
              return null;
            }
            const { props } = elm;
            return (
              <StepItem
                isLastElm={actives.length - 1 === index}
                isShowStepTail={this.checkRenderTail(children, index)}
                disabled={props.disabled}
                direction={direction}
                active={!props.disabled && actives.includes(props.activeKey)}
                onClick={event => this.handleChangeActive(event, elm)}
              >
                {typeof elm.props.title === "string" ? (
                  <span>{elm.props.title}</span>
                ) : (
                  elm.props.title
                )}
              </StepItem>
            );
          })}
        </StepStyled>
      </StepWrapper>
    );
  }
}

Step.propTypes = {
  activeStepKey: PropTypes.number,
  direction: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any
};

export default Step;
