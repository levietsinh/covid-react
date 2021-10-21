import { getCountries, getReportByCountry, getSummary } from "./api";
import { useState, useEffect } from 'react'

//Components
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import Global from "./components/Global";
import Vietnam from "./components/Global/Vietnam";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Header from "./components/Header";

//Material UI
import { Container, makeStyles, Typography } from "@material-ui/core";
import '@fontsource/roboto'
import './App.css'
const useStyle = makeStyles({
  areaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  container: {

  }
})
function App() {
  const [countries, setCountries] = useState([])
  const [countryId, setCountryId] = useState('jp')
  const [report, setReport] = useState([])
  const [globalReport, setGlobalReport] = useState([])
  const [vietnamReport, setVietnamReport] = useState([])
  const [vietnamSummary, setVietnamSummary] = useState([])
  const classes = useStyle()

  useEffect(() => {
    getCountries().then(res => {setCountries(res.data.sort(item => item.ISO2 !== 'VN'))});
    getSummary().then(res => {
      setGlobalReport(res.data.Global);
      setVietnamReport(res.data.Countries.find(item => item.Slug === 'vietnam'))
    });
    getReportByCountry('vietnam').then(res => setVietnamSummary(res.data))
  }, [])
  const handleOnChange = (e) => {
    setCountryId(e.target.value)
  }
  useEffect(() => {
    if (countryId && countries.length > 0) {
      const {Slug} = countries.find(country => country.ISO2.toLowerCase() === countryId)
      getReportByCountry(Slug).then(res => setReport(res.data.slice(-1)))
    }
  }, [countries, countryId])
  return (
    <Container style={{ fontFamily: 'Roboto'}} className={classes.container}>
      {
        countries.length > 0 ? (
          <>
            <Header/>
            <Global globalReport={ globalReport }/>
            <Vietnam vietnamReport={vietnamReport} vietnamSummary={vietnamSummary} />
            <Typography component="p" variant="body1" className={classes.areaTitle}>Các nước khác</Typography>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={ countryId }/>
            <HighLight report={report} />
            <Summary report={report} />
            <Footer/>
          </>
        ) : <Loading/>
      }
    </Container>
  );
}

export default App;
