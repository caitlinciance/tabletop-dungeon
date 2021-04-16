import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item }) {

  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)",
      }}
    >
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}
function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderCard
            item={props.game}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.game}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.game} />
        </div>
      </div>
    </div>
  );
}

export default Home;