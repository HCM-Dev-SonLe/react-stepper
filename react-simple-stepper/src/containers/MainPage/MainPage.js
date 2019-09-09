import React, { PureComponent } from 'react';
import SimpleStep from '../SimpleStep';

class MainPage extends PureComponent {
  onChange = (event, activeKey) => {
    console.log(event, activeKey);
  };

  render() {
    return <SimpleStep />;
  }
}

export default MainPage;
