import React, { useState } from "react";
import Navbar from "Components/Header/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Weather from "Components/Widget/Weather/Weather";
import TrelloCard from "Components/ServiceCard/TrelloCard";
import TwitchCard from "Components/ServiceCard/TwitchCard";
import SlackCard from "Components/ServiceCard/SlackCard";
import GithubCard from "Components/ServiceCard/GithubCard";
import YammerCard from "Components/ServiceCard/YammerCard";
import FacebookCard from "Components/ServiceCard/FacebookCard";
import trelloLogo from "Assets/trello.png";
import twitchLogo from "Assets/twitch.png";
import slackLogo from "Assets/slack.png";
import githubLogo from "Assets/github.png";
import yammerLogo from "Assets/yammer.png";
import facebookLogo from "Assets/trello.png";
import "./Dashboard.css";

function Dashboard(...props) {
  const [showWeather, setShowW] = useState(true);
  const [showTime, setShowT] = useState(true);
  const [showSat, setShowS] = useState(true);
  const [showSteam, setShowSteam] = useState(false);
  const [showCard, setShowCard] = useState(0);

  const handleShowW = () => {
    if (showWeather === false) {
      console.log(showCard);
      setShowW(true);
    } else setShowW(false);
  };

  const handleShowT = () => {
    if (showTime === false) {
      setShowT(true);
    } else setShowT(false);
  };

  const handleShowS = () => {
    if (showSat === false) {
      setShowS(true);
    } else setShowS(false);
  };

  const handleShowSteam = () => {
    if (showSteam === false) {
      setShowSteam(true);
    } else setShowSteam(false);
  };

  return (
    <div>
      <Navbar props={true} />
      <Row className="noRow">
        <Col xs={1} className="noCol">
          <Container className="leftC">
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(0)}>
              <img className="ConnectionLogo" src={trelloLogo} alt=""></img>
              Trello
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(1)}>
              <img className="ConnectionLogo" src={twitchLogo} alt=""></img>
              Twitch
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(2)}>
              <img className="ConnectionLogo" src={slackLogo} alt=""></img>
              Slack
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(3)}>
              <img className="ConnectionLogo" src={githubLogo} alt=""></img>
              Github
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(4)}>
              <img className="ConnectionLogo" src={yammerLogo} alt=""></img>
              Yammer
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(5)}>
              <img className="ConnectionLogo" src={facebookLogo} alt=""></img>
              Facebook
            </Button>
          </Container>
        </Col>
        <Col className="middleL" xs={7}>
          <TrelloCard
            title={"Create some board with Trello"}
            id={showCard}
          ></TrelloCard>
          <TwitchCard
            title={"Be aware of favourite streamer with Twitch"}
            id={showCard}
          ></TwitchCard>
          <SlackCard
            title={"Communicate with your mate with Slack"}
            id={showCard}
          ></SlackCard>
          <GithubCard
            title={"Share your repo with Github"}
            id={showCard}
          ></GithubCard>
          <YammerCard
            title={"Your favourite social media!"}
            id={showCard}
          ></YammerCard>
          <FacebookCard
            title={"Your favourite social media n°2 !"}
            id={showCard}
          ></FacebookCard>
        </Col>
        <Col className="middleR" xs={3}>
          <Row>
            <Weather title={"Weather"} show={showWeather} />
            <Weather title={"Time"} show={showTime} />
            <Weather title={"Satelite"} show={showSat} />
            <Weather title={"Steam"} show={showSteam} />
          </Row>
        </Col>
        <Col className="noCol" xs={1}>
          <Container className="rightC">
            <Button className="buttonWidget" onClick={handleShowW}>
              Weather
            </Button>
            <Button className="buttonWidget" onClick={handleShowT}>
              Time
            </Button>
            <Button className="buttonWidget" onClick={handleShowS}>
              Satelite
            </Button>
            <Button className="buttonWidget" onClick={handleShowSteam}>
              Steam
            </Button>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
