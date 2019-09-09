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
          <Step activeKey={1} title="Supplier" />
          <Step activeKey={2} title="Disable" disabled />
          <Step activeKey={3} title="Basic Information" />
          <Step activeKey={4} title="Language" />
          <Step activeKey={5} title="Sample" />
        </Stepper>
        <Stepper
          onChange={this.onChange}
          activeStepKey={1}
          direction="vertical"
        >
          <Step activeKey={1} title="Supplier" />
          <Step activeKey={2} title="Disable" disabled />
          <Step activeKey={3} title="Basic Information" />
          <Step activeKey={4} title="Language" />
          <Step activeKey={5} title="Sample" />
        </Stepper>
      </div>
    );
  }
}

export default MainPage;
