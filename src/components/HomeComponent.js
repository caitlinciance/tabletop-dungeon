import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <Card>
            <CardTitle>Dominion</CardTitle>
            <CardImg></CardImg>
            <CardText></CardText>
            <CardBody></CardBody>
          </Card>
        </div>
        <div className="col-md m-1">
          <Card>
            <CardTitle>Dominion</CardTitle>
            <CardImg></CardImg>
            <CardText></CardText>
            <CardBody></CardBody>
          </Card>
        </div>
        <div className="col-md m-1">
          <Card>
            <CardTitle>Dominion</CardTitle>
            <CardImg></CardImg>
            <CardText></CardText>
            <CardBody></CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
