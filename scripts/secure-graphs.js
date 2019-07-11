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
       categories: ['Your investment', 'Cash<br>(e.g. Bank account)', 'Inflation']
    },
    yAxis: {
      min: 0,
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
      data: [12.5, 8.7, 5.6],
    }]

  });

  var chart = Highcharts.chart('performanceProduct', {
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
      min: 0,
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
      data: [12.5, 8.7, 5.6],
    }]

  });

  // $('#switch-fund-graph').change(function() {
  //   chart.series[0].setData([11.5, 7.7, 5.6] );
  // });

  $("#switch-fund-graph").on('change', function() {
    var value = $(this).val();
    if (value == 1) {
      chart.series[0].setData([11.5, 8.7, 5.6] );
       chart.xAxis[0].update({
        categories: ['Tax free investments', 'Cash<br>(e.g. Bank account)', 'Inflation'] });
    } else {
      chart.series[0].setData([12.5, 8.7, 5.6] );
      chart.xAxis[0].update({
        categories: ['Unit trusts', 'Cash<br>(e.g. Bank account)', 'Inflation'] });
    }
  });





