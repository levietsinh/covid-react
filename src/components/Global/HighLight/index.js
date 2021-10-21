import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CountUp from 'react-countup'

const useStyles = makeStyles({
  highLight: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottom: "1px solid #ccc"
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 600
  },
  cardConfirmed: {
    borderTop: "6px solid red"
  },
  cardDeaths: {
    borderTop: "6px solid grey"
  },
  cardNew: {
    borderTop: "6px solid orange"
  },
  cardRecovered: {
    borderTop: "6px solid green"
  },
  summaryTitleConfirmed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  },
  summaryTitleNew: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange'
  },
  summaryTitleRecovered: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },
  summaryTitleDeaths: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey'
  },
  summarySubTitleConfirmed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },
  summarySubTitleNew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange'
  },
  summarySubTitleRecovered: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green'
  },
  summarySubTitleDeaths: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  }
})
export default function Global({ report }) {
  const summaryInfo = [
    {
      title: 'Tổng số ca nhiễm',
      count: report && report.TotalConfirmed > 0 ? report.TotalConfirmed : 0,
      type: 'confirmed'
    },
    {
      title: 'Số ca khỏi',
      count: report && report.TotalRecovered > 0 ? report.TotalRecovered : 0,
      type: 'recovered'
    },
    {
      title: 'Số ca tử vong',
      count: report && report.TotalDeaths > 0 ? report.TotalDeaths : 0,
      type: 'deaths'
    },
    {
      title: 'Số ca nhiễm mới',
      count: report && report.NewConfirmed > 0 ? report.NewConfirmed : 0,
      type: 'new'
    },
  ]
  const classes = useStyles()
  return (
    <Grid container spacing={3} className={classes.highLight}>
      {
        summaryInfo.map((item,index) => 
          (
          <Grid item sm={3} xs={12} key={index}>
            <Card classes={{
              root: item.type === 'confirmed' ?
                classes.cardConfirmed : (item.type === 'deaths' ? classes.cardDeaths : (item.type === 'new' ? classes.cardNew : classes.cardRecovered))
            }}>
                <CardContent>
                <Typography
                  component="p"
                  variant="body2"
                  className={
                    item.type === 'confirmed' ? classes.summaryTitleConfirmed :
                      (item.type === 'recovered' ? classes.summaryTitleRecovered :
                        (item.type === 'deaths' ? classes.summaryTitleDeaths : classes.summaryTitleNew))}
                >{item.title}</Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className={
                    item.type === 'confirmed' ? classes.summarySubTitleConfirmed :
                      (item.type === 'recovered' ? classes.summarySubTitleRecovered :
                        (item.type === 'deaths' ? classes.summarySubTitleDeaths : classes.summarySubTitleNew))}
                >
                    {item.count > 0 ? <CountUp end={ item.count || 0} duration={2} separator='.' /> : 'N/A'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )
      }
    </Grid>
  )
}
