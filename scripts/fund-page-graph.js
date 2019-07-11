var chart = Highcharts.chart('performanceProduct', {
  chart: {
    type: 'column',
    marginLeft: 40,
    // marginTop: 10,
    spacingTop: 30,
    height: 290
  },
  title: {
    text: null
  },
  subtitle: {
    text: null
  },

  xAxis: {
     categories: ['Fund', 'Benchmark<br>(Inflation + 5%)', 'Cash<br>(e.g. Bank account)', 'Inflation']
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    shadow: false
  },

  exporting: {
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
    }
  },
  colors: [
    '#78be20',
    '#dedede',
    '#dedede',
    '#dedede'
  ],

  series: [{
    name: 'Percentage',
    data: [12.5, 9.6, 8.7, 5.6],
  }]

});