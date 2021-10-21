import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import VirusImage from '../../assets/images/virus.png'
const useStyles = makeStyles({
  loader: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '20vw',
    animation: `$spiner 3s linear infinite`
  },
  "@keyframes spiner": {
    "0%": {
      transform: 'rotate(0)'
    },
    "50%": {
      transform: 'rotate(180deg)'
    },
    "100%": {
      transform: 'rotate(360deg)'
    }
  },
  loadingText: {
    fontSize: 36,
    fontFamily: 'cursive',
    textAlign: 'center'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default function Loading() {
  const classes = useStyles()
  return (
    <div className={classes.loader}>
      <div className={classes.loading}>
        <img src={VirusImage} alt="Virus" className={ classes.img } />
        <Typography variant="body1" component="p" className={classes.loadingText}>Loading....</Typography>
      </div>   
    </div>
  )
}
