import React from 'react';
import PropTypes from 'prop-types';
import './board.css';

import BoardSpace from './board-space';

export default class Board extends React.Component {
	static propTypes = {
		length: PropTypes.number.isRequired
	};

	static defaultProps = {
		length: 3 
	};

	handleSpaceClick() {
		console.log('I have been clicked!');
	}

	generateRandBoardValue() {
		const rand = Math.random() * 3;

		if (rand < 1) {
			return 'X';
		} else if (rand < 2) {
			return 'O';
		} else return ' ';
	}

	getBoardSpaceClass(row, col, length) {
		const classes = [];

		if (row === 0) {
			classes.push('first_row');
		} else if (row === length - 1) {
			classes.push('last_row');
		}

		if (col === 0) {
			classes.push('first_col');
		} else if(col === length - 1) {
			classes.push('last_col');
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
						value={this.generateRandBoardValue()}
						onClick={this.handleSpaceClick}
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
				{this.buildBoard()}
			</div>

		);
	}
}