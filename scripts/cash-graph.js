// // Line charts

Highcharts.chart('cashYield', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'The Nedgroup Investments Cash Solutions funds offer the yields of a fixed deposit with the liquidity of a call account'
    },
    xAxis: {
        categories: ["Call", "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m", "11m", "1y", "13m"]
    },
    yAxis: {
      opposite: false,
      labels: {
        formatter: function () {
            return '<span>' + this.value + '%</span>';
        },
        softMin: 10000
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver',
      }]
    },
    credits: {
        enabled: false
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        states: {
          hover: {
            enabled: false
          }
        }
      },
      series: {
        marker: {
          enabled: false
        },
      }
    },
    colors: [
      '#cccccc',
      '#28af88',
      '#78be20'
      ,
    ],
    tooltip: {
      pointFormat: '<span>{series.name}</span>: <b>{point.y}</b>',
      valueDecimals: 2,
      split: true,
      shadow: false
    },
    series: [{
        name: 'Core Income Yield',
        data: [8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4, 8.4],
        dashStyle: 'ShortDot'
    },
        {
        name: 'Corporate Money Market and Money Market yields',
        data: [7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8, 7.8],
        dashStyle: 'ShortDot'
    },
    {
        name: 'Balanced Fund',
        data: [6.8, 7, 7.1, 7.3, 7.5, 7.7, 8, 8.1, 8.2, 8.3, 8.38, 8.4, 8.42, 8.35]
    }]
});