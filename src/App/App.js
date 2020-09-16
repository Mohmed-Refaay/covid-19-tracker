import React, { useState, useEffect } from "react";

// components
import Map from "../Components/MapCases/index";
import CasesBox from "../Components/CasesBox/index";
import Table from "../Components/Table/index";
import LineGraph from "../Components/LineGraph/index";

// styling
import {
  CardContent,
  FormControl,
  Select,
  MenuItem,
  Card,
} from "@material-ui/core";
import "leaflet/dist/leaflet.css";
import { StyledApp } from "./styles";

function App() {
  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState("worldwide");
  const [casesInfo, setcasesInfo] = useState();
  const [tableData, setTableData] = useState([]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCenter, setMapCenter] = 
  useState({ lat: 34.80746, lng: -40.4796 });
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => setcasesInfo(data));
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = (d) => {
            const sortdata = [...d];

            return sortdata.sort((a, b) => (a.cases > b.cases ? -1 : 1));
          };

          const tableSortedData = sortedData(data);

          setTableData(tableSortedData);
          setcountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryVal = e.target.value;
    setcountry(countryVal);

    const url =
      countryVal === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryVal}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setcasesInfo(data));
  };

  return (
    <StyledApp>
      <div className="app__left">
        <div className="app__header">
          <h1 className="app__head">COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">World Wide</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <CasesBox
            title="Cases"
            cases={casesInfo?.todayCases}
            total={casesInfo?.cases}
          />
          <CasesBox
            title="Recoved"
            cases={casesInfo?.todayRecovered}
            total={casesInfo?.recovered}
          />
          <CasesBox
            title="Death"
            cases={casesInfo?.todayDeaths}
            total={casesInfo?.deaths}
          />
        </div>

        <Map center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </StyledApp>
  );
}

export default App;
