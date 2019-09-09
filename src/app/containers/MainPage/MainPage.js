import React, { PureComponent } from "react";

import { Stepper, Step } from "components/Stepper";
import STEPPER_DIRECTION from "constants/stepper";

import { Container } from "./styles";

class MainPage extends PureComponent {
  onChange = (event, activeKey) => {
    console.log(event);
    console.log('You are select', activeKey);
  };

  render() {
    return (
      <Container>
        <h1>Horizontal Stepper</h1>
        <Stepper onChange={this.onChange} activeStepKey={1}>
          <Step activeKey={1} title="Supplier" />
          <Step activeKey={2} title="Disable" disabled />
          <Step activeKey={3} title="Basic Information" />
          <Step activeKey={4} title="Language" />
          <Step activeKey={5} title="Sample" />
        </Stepper>
        <hr/>
        <h1>Vertical Stepper</h1>
        <Stepper
          onChange={this.onChange}
          activeStepKey={1}
          direction={STEPPER_DIRECTION.VERTICAL}
        >
          <Step activeKey={1} title="Supplier" />
          <Step activeKey={2} title="Non-Disable" />
          <Step activeKey={3} title="Basic Information" />
          <Step activeKey={4} title="Language" />
          <Step activeKey={5} title="Sample" />
        </Stepper>
      </Container>
    );
  }
}

export default MainPage;
