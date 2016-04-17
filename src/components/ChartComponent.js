'use strict';

import React from 'react';
import Highcharts from 'highcharts';

require('styles/components/Chart.sass');

class ChartComponent extends React.Component {
		constructor(props) {
				super(props)
				if (props.modules) {
						props.modules.forEach(function (module) {
								module(Highcharts);
						});
				}
				this.chart = null;
		}
		
		componentDidMount() {
				this.chart = new Highcharts[this.props.type || 'Chart'](
						this.props.container, this.props.options
				);
		}
		
		componentWillUnmount() {
			this.chart.destroy();
		}
				
  render() {
    return (
      <div className="chart-component" id={this.props.container}>
        
      </div>
    );
  }
}

ChartComponent.displayName = 'ChartComponent';

// Uncomment properties you need
ChartComponent.propTypes = {
		container: React.PropTypes.string,
		options: React.PropTypes.object,
		modules: React.PropTypes.array
};
// ChartComponent.defaultProps = {};

export default ChartComponent;
