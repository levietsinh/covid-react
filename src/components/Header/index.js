import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import VirusImage from './../../assets/images/virus.png'
import '@fontsource/zcool-kuaile'
const useStyles = makeStyles({
  header: {
    borderBottom: '4px solid #ccc',
    padding: '20px 0',
    marginBottom: 32
  },
  headTitle: {
    fontSize: 52,
    fontWeight: 'bold',
    fontFamily: 'ZCOOL KuaiLe'
  },
  subText: {
    fontSize: 20,
    marginLeft: 24
  },
  virusImage: {
    width: 28,
    animation: `$spinIcon 3s linear infinite`
  },
  "@keyframes spinIcon": {
    "0%": {
      transform: 'rotate(0)',
    },
    "50%": {
      transform: 'rotate(180deg)',
    },
    "100%": {
      transform: 'rotate(360deg)',
    }
  }
})
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="body1" component="h1" className={classes.headTitle}>S-antiC<img className={classes.virusImage} src={ VirusImage }/>vi</Typography>
      <Typography variant="body1" component="p" className={classes.subText}>Thông tin tình hình dịch Covid trong và ngoài nước</Typography>
    </div>
  )
}
