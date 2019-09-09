import React, { PureComponent } from 'react';
import { Stepper, Step } from '../../components/Stepper';

class SimpleStep extends PureComponent {
  onChange = (event, activeKey) => {
    console.log(event, activeKey);
  };

  render() {
    return (
      <div style={{ width: '1200px' }}>
        <h2>Horizontal Stepper</h2>
          <Stepper onChange={this.onChange} activeStepKey={1}>
            <Step activeKey={1} title="Supplier" />
            <Step activeKey={2} title="Basic Information" disabled />
            <Step activeKey={3} title="Language" />
            <Step activeKey={4} title="Sample" />
          </Stepper>
            <h2>Vertical Stepper</h2>
          <Stepper onChange={this.onChange} activeStepKey={1} direction="vertical">
            <Step activeKey={1} title="Supplier" />
            <Step activeKey={2} title="Basic Information" disabled />
            <Step activeKey={3} title="Language" />
            <Step activeKey={4} title="Sample" />
          </Stepper>
      </div>
    );
  }
}

export default SimpleStep;
