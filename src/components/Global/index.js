import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import HighLight from './HighLight/index'
const useStyle = makeStyles({
  areaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  }
})
export default function Global({ globalReport }) {
  const styles = useStyle()
  return (
    <div className={styles}>
      <Typography variant="body1" component="p" className={styles.areaTitle}>Thế giới</Typography>
      <HighLight report={globalReport} />
      <Typography variant="body1" component="p" className={styles.areaTitle}>Việt Nam</Typography>
    </div>
  )
}
