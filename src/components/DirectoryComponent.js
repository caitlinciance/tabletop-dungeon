import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { getGames } from '../redux/selectors'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function Directory() {
    const games = useSelector(getGames);
    const [selectedGame, setSelectedGame] = useState(null);

    // renderSelectedGame(game) {
    //     if (game) {
    //         return (
    //             <Card>
    //                 <CardImg top src={game.image} alt={game.name} />
    //                 <CardBody>
    //                     <CardTitle>{game.name}</CardTitle>
    //                     <CardText>{game.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

    console.log('games from state', games)

    return (
        <div className="container">
            <div className="row">
                {games.map(game => (
                    <div key={game.id} className="col-md-5 m-1">
                        <Card onClick={() => this.onGameSelect(game)}>
                            <CardImg width="100%" src={game.image} alt={game.name} />
                            <CardImgOverlay>
                                <CardTitle>{game.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-md-5 m-1">
                    {/* {this.renderSelectedGame(this.state.selectedGame)} */}
                </div>
            </div>
        </div>
    );
}


// class Directory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedGame: null
//         };
//     }

//     onGameSelect(game) {
//         this.setState({selectedGame: game});
//     }

//     renderSelectedGame(game) {
//         if (game) {
//             return (
//                 <Card>
//                     <CardImg top src={game.image} alt={game.name} />
//                     <CardBody>
//                         <CardTitle>{game.name}</CardTitle>
//                         <CardText>{game.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         }
//         return <div />;
//     }

//     render() {
//         const games = useSelector(getGames);

//         const directory = games.map(game => {
//             return (
//                 <div key={game.id} className="col-md-5 m-1">
//                     <Card onClick={() => this.onGameSelect(game)}>
//                         <CardImg width="100%" src={game.image} alt={game.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{game.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//                 <div className="row">
//                     <div className="col-md-5 m-1">
//                         {this.renderSelectedGame(this.state.selectedGame)}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Directory;