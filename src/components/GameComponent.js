import React from 'react'

import { Col, Panel } from 'react-bootstrap'

function Game(props) {
  let { game } = props

  return (
    <Col lg={3} md={4} sm={6}>
      <Panel className="game">
        <div className="game-img-wrapper">
          <a href="#">
            <img
              alt={game.name}
              className="img-responsive product-img"
              src={game.picture}
            />
          </a>
        </div>

        <h4 className="ellipsis" title={game.name}>
          <a href="#">{game.name}</a>
        </h4>

        <h5 className="ellipsis game-name" title={game.name}>
          {`by ${game.name}`}
        </h5>
      </Panel>
      <Card>
        <CardTitle>Dominion</CardTitle>
        <CardImg></CardImg>
        <CardText></CardText>
        <CardBody></CardBody>
      </Card>
    </Col>
  )
}

Game.propTypes = {
  game: React.PropTypes.object.isRequired,
}

export default Product
