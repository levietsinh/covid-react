import HighchartsReact from 'highcharts-react-official'
import React from 'react'
import HighCharts from 'highcharts'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { Button, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  button: {
    margin: "0 12px"
  },
  highcharts: {
    marginBottom: 24,
    border: "2px solid #ccc",
    padding: 8,
    borderRadius: 8,
  },
  buttonGroup: {
    marginBottom: 20,
  }
})
const getGenerateOptions = (data) => {
  const categories = data.map(item => moment(item.Date).format('DD/MM/YYYY'));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: 'Tổng ca nhiễm',
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ['#F3585B'],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Tổng Ca nhiễm',
        data: data.map((item) => item.Confirmed),
      },
    ],
  }
}
const Summary = ({ data, report }) => {
  const classes = useStyle();
  const [option, setOption] = useState({});
  const [dayRange, setDayRange] = useState('all')

  useEffect(() => {
    let dayRangeReport = [];
    switch (dayRange) {
      case 'all':
        dayRangeReport = report;
        break;
      case '30':
        dayRangeReport = report.slice(report.length - 30);
        break;
      case '7':
        dayRangeReport = report.slice(report.length - 7);
        break;
      default:
        dayRangeReport = report;
    } 
    setOption(getGenerateOptions(dayRangeReport))
  }, [report, dayRange])
  return (
    <div className={classes.highcharts}>
      <div className={classes.buttonGroup}>
        <Button variant="contained" color={dayRange === 'all' ? 'primary' : ''} onClick={() => setDayRange('all')}>Tất cả</Button>
        <Button className={classes.button} variant="contained" color={dayRange === '30' ? 'primary' : ''} onClick={() => setDayRange('30')}>30 ngày</Button>
        <Button variant="contained" color={dayRange === '7' ? 'primary' : ''} onClick={() => setDayRange('7')}>7 ngày</Button>
      </div>
      
      <HighchartsReact
        highcharts={HighCharts}
        options={option}
      />
    </div>
  )
}

export default React.memo(Summary);