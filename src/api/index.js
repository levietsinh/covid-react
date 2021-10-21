import axios from "axios"
export const getSummary = () => axios.get('https://api.covid19api.com/summary');
export const getCountries = () => axios.get('https://api.covid19api.com/countries');
export const getReportByCountry = (country) => axios.get(`https://api.covid19api.com/dayone/country/${country}`)