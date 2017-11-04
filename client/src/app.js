import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './app.css';
import Game from './components/game';

class App extends React.Component {
  state = {
    title: ''
  };

	constructor(...args) {
		super(...args);

		this.startGame = this.startGame.bind(this);
	}

  async componentWillMount() {
    this.setState({title: await this.updateTitle()});
  }

  async updateTitle() {
    const response = await fetch('http://localhost:3001/api/title').then(res => res.json());

    return response.title;
	}
		
	async startGame() {
		//todo: actually get it to start a game...
		const game_id = 'NEWGAME';

		window.location.href= `/game/${game_id}`;
	}

	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<div className="app-header">
						<span>{this.state.title}</span>

						<div className="app-buttons">
							<a onClick={this.startGame}>
								Start Game
							</a>
						</div>
					</div>
					
					<Route 
						path='/' 
						exact
						render={() => {
							return <div>Home Page</div>;
						}}
					/>

					<Route 
						path='/game/:game_id' 
						render={(props) => {
							//contains game_id
							const params = props.match.params;

							return <Game  {...params}/>
						}}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
