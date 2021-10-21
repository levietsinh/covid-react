import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Countup from 'react-countup'

const useStyle = makeStyles({
  highLight: {
    marginBottom: 20
  },
  cardDeaths: {
    borderTop: "6px solid grey"
  },
  cardConfirmed: {
    borderTop: "6px solid red"
  },
  cardRecovered: {
    borderTop: "6px solid green"
  },

  summaryTitleConfirmed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
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
export default function HighLight({ report }) {
  const classes = useStyle()
  const data = report ? report[report.length -1] : []
  const summary = [
    {
      title: 'Tổng số ca nhiễm',
      count: data && data.Confirmed ? data.Confirmed : 0,
      type: 'confirmed'
    },
    {
      title: 'Số ca khỏi',
      count: data && data.Recovered ? data.Recovered : 0,
      type: 'recovered'
    },
    {
      title: 'Số ca tử vong',
      count: data && data.Deaths ? data.Deaths : 0,
      type: 'deaths'
    },
  ]
  return (
    <Grid container spacing={3} className={classes.highLight}>
      {
        summary.map((item,index) => 
          (
          <Grid item sm={4} xs={12} key={index}>
            <Card classes={{
              root: item.type === 'confirmed' ? classes.cardConfirmed :
              (item.type === 'recovered' ? classes.cardRecovered : classes.cardDeaths)
              }}>
                <CardContent>
                <Typography component="p" variant="body2"
                className={
                  item.type === 'confirmed' ? classes.summaryTitleConfirmed :
                    (item.type === 'recovered' ? classes.summaryTitleRecovered : classes.summaryTitleDeaths)}
                >{item.title}</Typography>
                <Typography component="span" variant="body2"
                className={
                  item.type === 'confirmed' ? classes.summarySubTitleConfirmed :
                    (item.type === 'recovered' ? classes.summarySubTitleRecovered : classes.summarySubTitleDeaths)}
                >
                    {item.count > 0 ? <Countup end={ item.count || 0} duration={2} separator='.' /> : 'N/A'}
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
