import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import axios from "axios";

export default class TopGames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      loading: false,
      resultsXML: null,
      results: [],
    };

    this.fetchResults = this.fetchResults.bind(this);
  }

  componentDidMount() {
    this.fetchResults();
  }

  async fetchResults() {
    const response = await axios.get(`https://bgg-json.azurewebsites.net/hot`);
    this.setState({ results: response.data });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          {this.state.results.map((game) => (
            <Card className="col-md-3">
              <CardImg top width="100%" height="300px" src={game.thumbnail} style={imgStyle} />
              <CardBody>
                <CardTitle tag="h5">{game.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Published {game.yearPublished}
                </CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}


const imgStyle = {
    objectFit: 'cover',
}