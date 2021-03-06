import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";
import slackLogo from "Assets/slack.png";
import "../TrelloButton/TrelloButton.css";
import {url} from "../../../Utils/Utils";

function LogForm(props) {
  function connect() {
    Axios(`${url.local}link/auth/slack`, {
      method: "GET"
    })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("service", "Slack");
        window.open(res.data.url, "_blank");
      })
      .catch(e => {
        console.log(e.toString());
      });
  }
  return (
    <Button className="TrelloButton" onClick={connect}>
      <img className="ConnectionLogo" src={slackLogo} alt=""></img>
      Slack
    </Button>
  );
}

export default LogForm;
