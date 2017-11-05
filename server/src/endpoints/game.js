export default function(app) {
	const winConditions = {}

	app.post('/api/winCondition', function(req, res){
		// TODO: Fit winCondition logic here
		res.json({ win: false, message: 'You did not win' });
	});


	// Todo: Fit the board delivery and set up to these routes
	app.post('/api/game', function(req, res) {
		//start a game?
		res.send({
			id: 'NEW GAME ID'
		});
	});

	app.get('/api/game/:game_id', function(req, res) {
		res.send({
			size: 4,
			board: 'somedatastructure',
			etc: true
		});
	});
}
