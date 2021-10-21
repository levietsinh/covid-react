import React from 'react'
import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  countrySelector: {
    marginBottom: 16,
  },
  selectorRoot: {
    '&::before': {
      borderBottom: 'unset'
    }
  },
  selector: {
    '&:focus': {
      borderColor: 'red',
    }
  },
  selectMenu: {
    borderRadius: 4,
    color: 'red'
  }
})
export default function CountrySelector({ value, handleOnChange, countries }) {
  const classes = useStyles()
  return (
    <FormControl className={classes.countrySelector}>
      <InputLabel htmlFor="countries-select" shrink>Quốc gia</InputLabel>
      <NativeSelect
        variant='outlined'
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "countries",
          id:'countries-select'
        }}
        classes={{root: classes.selectorRoot, select: classes.selector, selectMenu: classes.selectMenu}}
      >
        {countries.map((country, index) => {
          return <option value={country.ISO2.toLowerCase()} key={country.ISO2}>{ country.Country }</option>
      })}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  )
}
