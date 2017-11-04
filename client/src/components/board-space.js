import React from 'react';
import PropTypes from 'prop-types';

import './board-space.css';

export default class BoardSpace extends React.Component {
	state = { gamePiece: ''}

	static propTypes = {
		className: PropTypes.string,
		updateBoardValues: PropTypes.func.isRequired,
		toggleTurn: PropTypes.func.isRequired,
		turn: PropTypes.number
	};

	updateValue(){
		let newGamePiece
		let value
		if(this.props.turn === 1){
			newGamePiece = 'X'
		} else {
			newGamePiece = 'O'
		}
		if(this.state.gamePiece === ''){
			this.setState({
				gamePiece: newGamePiece
			})
		}
		this.props.updateBoardValues(this.props.className, newGamePiece)
	}

	handleClick() {
		this.props.toggleTurn();
		this.updateValue();
	}

	render() {
		return (
			<div className={`board_space ${this.props.className}`}  onClick={this.handleClick.bind(this)}>
				<span>{this.state.gamePiece}</span>
			</div>
		);
	}
}
