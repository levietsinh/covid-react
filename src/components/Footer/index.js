import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Logo from './../../assets/images/virus.png'
import IconFacebook from './../../assets/images/icon-facebook.png'
import IconZalo from './../../assets/images/icon-zalo.png'
import IconSkype from './../../assets/images/icon-skype.png'
import '@fontsource/zcool-kuaile'

const useStyles = makeStyles({
  footer: {
    borderTop: '4px solid #ccc',
    width: "calc(100% + 48px)",
    marginLeft: -24,
    padding: 12,
    marginTop: 20,
    color: '#333'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12
  },
  logoText: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 700,
    fontFamily: 'ZCOOL kuaile'
  },
  footerRight: {
    borderRight: '1px solid #333'
  },
  subText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  footerLeft: {
    textAlign: 'center'
  },
  socialMedia: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  iconList: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  iconItem: {
    margin: '0 12px',
    cursor: 'pointer',
    '&:hover': {
      animation: `$hoverIcon 3s linear infinite`
    }
  },
  "@keyframes hoverIcon": {
    "0%": {
      transform: 'scale(1)'
    },
    "50%": {
      transform: 'scale(1.3)'
    },
    "100%": {
      transform: 'scale(1)'
    }
  }
})
export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.footer}>
      <Grid item sm={6} xs={12} className={classes.footerRight}>
        <Typography variant="body1" component="p" className={classes.logo}>
          <img src={Logo} className="logo-img" alt="Virus" width="80" />
          <span className={classes.logoText}>S-antiCovi</span>
        </Typography>
        <Typography variant="body1" component="p" className={classes.subText}>
          'Cầu mong cơn đại dịch SARS-CoV-2 sẽ nhanh chóng được đẩy lùi để mọi người có thể trở lại cuộc sống bình thường. Việt Nam chúng ta sẽ cùng nhau đoàn kết, động viên và giúp đỡ nhau để vượt ra giai đoạn khó khăn này.'
        </Typography>
        <Typography variant="body1" component="p">© Designed by <span style={{fontWeight: 'bold'}}>Lê Viết Sinh</span> - 2021</Typography>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.footerLeft}>
        <Typography variant="body1" component="p" className={classes.socialMedia}>
          SOCIAL MEDIA
        </Typography>
        <div className={classes.iconList}>
          <img src={IconFacebook} className={classes.iconItem} alt="Icon" width='40'/>
          <img src={IconZalo} className={classes.iconItem} alt="Icon" width='40'/>
          <img src={IconSkype} className={classes.iconItem} alt="Icon" width='40'/>
        </div>
      </Grid>
    </Grid>
  )
}
