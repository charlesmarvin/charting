require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import BreakdownComponent from './BreakdownComponent';



class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
				<BreakdownComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
