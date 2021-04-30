import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { getGames } from '../redux/selectors'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import TopGames from './TopGamesComponent'

function Directory() {
    const games = useSelector(getGames);
    const [selectedGame, setSelectedGame] = useState(null);

    console.log('games from state', games)

    return (
        <div className="container">
            <TopGames />
        </div>
    );
}



export default Directory;