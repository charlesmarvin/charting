'use strict';

import React from 'react';
import Highcharts from 'highcharts';
import ChartComponent from './ChartComponent';

require('styles/components/Breakdown.sass');

let options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    };

class BreakdownComponent extends React.Component {
	constructor(props) {
		super(props)
	}
		
  render() {
    return (
      <div className="breakdown-component">
				<ChartComponent options={options} container="chart" />
      </div>
    );
  }
}

BreakdownComponent.displayName = 'BreakdownComponent';

// Uncomment properties you need
//BreakdownComponent.propTypes = {};
// BreakdownComponent.defaultProps = {};

export default BreakdownComponent;