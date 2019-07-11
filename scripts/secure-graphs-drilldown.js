  // Secure charts

  var chart = Highcharts.chart('performanceTotal', {
    chart: {
      type: 'column',
      marginLeft: 50,
      marginTop: 40,
      height: 280
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },

    xAxis: {
       categories: ['Unit trusts', 'Cash<br>(e.g. Bank account)', 'Inflation']
    },
    yAxis: {
      title: {
        text: 'Annual Returns %'
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
      '#dedede'
    ],

    series: [{
      name: 'Percentage',
      data: [-2.5, 8.7, 5.6],
    }]

  });

  var chart = Highcharts.chart('performanceProduct', {
    chart: {
      type: 'column',
      marginLeft: 50,
      marginTop: 40,
      height: 295
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },

    xAxis: {
       categories: ['Global Flexible Feeder Fund', 'Benchmark<br>(Inflation + 4%)', 'Cash<br>(e.g. Bank account)', 'Inflation']
    },
    yAxis: {
      title: {
        text: 'Annual Returns %'
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

  // $('#switch-fund-graph').change(function() {
  //   chart.series[0].setData([11.5, 7.7, 5.6] );
  // });

  $("#switch-fund-graph").on('change', function() {
    var value = $(this).val();
    if (value == 1) {
      chart.series[0].setData([-1.5, 9.6, 8.7, 5.6] );
      chart.xAxis[0].update({
        categories: ['Stable fund', 'Benchmark<br>(Inflation + 4%)', 'Cash<br>(e.g. Bank account)', 'Inflation'] });
      } else if (value == 2) {
      chart.series[0].setData([12.5, 9.6, 8.7, 5.6] );
      chart.xAxis[0].update({
        categories: ['Money Market fund', 'Benchmark<br>(Inflation + 4%)', 'Cash<br>(e.g. Bank account)', 'Inflation'] });
    } else if (value == 3) {
      chart.series[0].setData([13.5, 9.6, 8.7, 5.6] );
      chart.xAxis[0].update({
        categories: ['Managed fund', 'Benchmark<br>(Inflation + 4%)', 'Cash<br>(e.g. Bank account)', 'Inflation'] });
    } else {
      chart.series[0].setData([11.5, 9.6, 8.7, 5.6] );
      chart.xAxis[0].update({
        categories: ['Global Flexible Feeder fund', 'Benchmark<br>(Inflation + 4%)', 'Cash<br>(e.g. Bank account)', 'Inflation'] });
    }
  });



