import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
const useStyles = makeStyles(styles);

export default function GithubForm() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes[cardAnimaton]}>
            <CardHeader color="primary" style={{ textAlign: "center" }}>
              <Button color="transparent">
                <i className={" fab fa-github"} style={{ fontSize: 200 }} />
              </Button>
            </CardHeader>
            <CardBody>
              <h5>Veuillez renseigné vos identifiants Github</h5>
              <CustomLinearProgress
                variant="determinate"
                color="success"
                value={90}
                style={{ width: "100%", display: "inline-block" }}
              />
              <form>
                <CustomInput
                  labelText="Email"
                  id="Email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Mot de passe"
                  id="pass"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </form>
            </CardBody>
            <CardFooter>
              <Button href={"/github"} color="success" round>
                <CheckIcon />
                Next
              </Button>
              <Button href={"/github"} color="danger" round>
                <CancelIcon />
                Ignore
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
