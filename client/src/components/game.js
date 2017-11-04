import React from 'react';
import PropTypes from 'prop-types';

import Board from './board';

export default class Game extends React.Component {
	static propTypes = {
		game_id: PropTypes.any.isRequired
	};

	render() {
		return <Board />;
	}
}
