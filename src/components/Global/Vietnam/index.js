import { Typography } from '@material-ui/core'
import React from 'react'
import Summary from '../../Summary'
import HighLight from '../HighLight/index'
 
export default function Vietnam({ vietnamReport, vietnamSummary }) {
  return (
    <div>
      <HighLight report={ vietnamReport } />
      <Summary report={ vietnamSummary }/>
    </div>
  )
}
