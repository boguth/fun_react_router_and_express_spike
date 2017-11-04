export default function(app) {
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