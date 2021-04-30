import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import TopGames from './TopGamesComponent'

function Home(props) {
  return (
    <div className="container">
        <TopGames />
      <h2>Featured Games</h2>
      <div className="row">
        <div className="col-md m-1">
          <Card>
            <CardTitle><h3>Dominion</h3></CardTitle>
            <CardImg src="./assets/dominion2.jpg"></CardImg>
            <CardBody>Lorem Ipsum</CardBody>
          </Card>
        </div>
        <div className="col-md m-1">
          <Card>
            <CardTitle><h3>Monopoly</h3></CardTitle>
            <CardImg src="./assets/monopoly.jpg"></CardImg>
            <CardBody>Lorem Ipsum</CardBody>
          </Card>
        </div>
        <div className="col-md m-1">
          <Card>
            <CardTitle><h3>Chess</h3></CardTitle>
            <CardImg src="./assets/chess.jpg"></CardImg>
            <CardBody>Lorem Ipsum</CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
