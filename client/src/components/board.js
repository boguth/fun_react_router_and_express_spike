import React from 'react';
import PropTypes from 'prop-types';
import './board.css';

import BoardSpace from './board-space';

export default class Board extends React.Component {
	state = { turn: 1, boardValues: [], square: '' }

	static propTypes = {
		length: PropTypes.number.isRequired
	};

	static defaultProps = {
		length: 3 
	};

	updateBoardValues(space, piece){
		let boardValue = space + piece
		this.setState({
			boardValues: this.state.boardValues.concat([boardValue])
		})
	}

	toggleTurn() {
		let turnValue;
		if (this.state.turn === 1){
			turnValue = 2
		}else {
			turnValue = 1
		}
		this.setState({
			turn: turnValue
		})
	}

	getBoardSpaceClass(row, col, length) {
		const classes = [];

		if (row === 0) {
			classes.push('first_row');
		} else if (row === length - 1) {
			classes.push('last_row');
		} else {
			classes.push('middle_row')
		}

		if (col === 0) {
			classes.push('first_col');
		} else if(col === length - 1) {
			classes.push('last_col');
		} else{
			classes.push('middle_col')
		}
		return classes.join(' ');
	}

	buildBoard() {
		const {length} = this.props;
		const rows = [];

		for(let row = 0; row < length; row++) {
			const cols = []

			for(let col = 0; col < length; col++) {
				cols.push(
					<BoardSpace 
						key={`${row}_${col}`}
						updateBoardValues = {this.updateBoardValues.bind(this)}
						turn = {this.state.turn}
						toggleTurn={this.toggleTurn.bind(this)}
						className={this.getBoardSpaceClass(row, col, length)}
					/>
				);
			}

			rows.push(<div key={row} className="board_row">{cols}</div>);
		}
		return rows;

	}

	render() {
		return (
			<div className="board_wrap">
				<h1> Player {this.state.turn}'s Turn </h1>
				<p> Moves: {this.state.boardValues} </p>
				{this.buildBoard()}
			</div>

		);
	}
}
