import React, { PureComponent } from "react";

import { Stepper, Step } from "components/Stepper";

class MainPage extends PureComponent {
  onChange = (event, activeKey) => {
    console.log(event, activeKey);
  };

  render() {
    return (
      <div style={{ width: "1200px" }}>
        <Stepper onChange={this.onChange} activeStepKey={1}>
          <Step activeKey={1} title="1" />
          <Step activeKey={2} title="2" disabled />
          <Step activeKey={3} title="3" />
          <Step activeKey={4} title="4" />
          <Step activeKey={5} title="5" />
        </Stepper>
        <Stepper
          onChange={this.onChange}
          activeStepKey={1}
          direction="vertical"
        >
          <Step activeKey={1} title="1" />
          <Step activeKey={2} title="2" disabled />
          <Step activeKey={3} title="3" />
          <Step activeKey={4} title="4" />
          <Step activeKey={5} title="5" />
        </Stepper>
      </div>
    );
  }
}

export default MainPage;
