import React, { useState, useEffect } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import Axios from "axios";
import "./Widget.css";

function Weather(props) {
  const [city, setCity] = useState("Lille");
  const [country, setCountry] = useState("France");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    console.log(city, " ", country);
    Axios.post("http://localhost:3000/widget/weather", {
      city: "Lille",
      country: "France"
    })
      .then(res => {
        console.log(res.data.data[0]);
        setTemp(res.data.data[0].temp);
        setIcon(res.data.data[0].weather.icon);
        setDesc(res.data.data[0].weather.description);
        setWind(res.data.data[0].wind_spd);
      })
      .catch(err => {
        console.log("err: " + err);
      });
  }, []);

  const getWeather = () => {
    console.log(city, " ", country);
    Axios.post("http://localhost:3000/widget/weather", {
      city: city,
      country: country
    })
      .then(function(res) {
        console.log(res);
        setTemp(res.data.data[0].temp);
        setIcon(res.data.data[0].weather.icon);
        setDesc(res.data.data[0].weather.description);
        setWind(res.data.data[0].wind_spd);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  if (props.show === true) {
    return (
      <div>
        <Card className="WidgetCard">
          <Card.Header>
            <Col>
              {country} {city} {desc} {wind} {temp}
            </Col>
            <Col>
              <img
                alt={""}
                src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
              />
            </Col>
          </Card.Header>
          <Card.Body className="WeatherWidgetBody">
            <Row>
              <Form.Control
                placeholder="City"
                onChange={e => setCity(e.target.value)}
              />
              <Form.Control
                placeholder="Country"
                onChange={e => setCountry(e.target.value)}
              />
            </Row>
            <Row>
              <Button className="AccordionButton" onClick={getWeather}>
                Get Weather!
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return null;
}

export default Weather;
