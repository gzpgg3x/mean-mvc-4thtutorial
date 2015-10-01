//var port = 1337;

var port = normalizePort(process.env.PORT || '8000');
//app.set('port', port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = {
	port: port,
	// db: 'mongodb://localhost/todos',
	db: 'example:example@ds035693.mongolab.com:35693/mean_mcv_4thtutorial1',

	facebook: {
		clientID: '513828288756645',
		clientSecret: '2d7cc991efddb864e9af61f307980b9a',
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'yFntGKkvMZkDKL47XGtzLNdRA',
		clientSecret: 'EAiPTjPYLX5nrkpRtxYQflbWpRTqqLwwBHRLh7WpdQ1P69Tre6',
		callbackURL: 'http://localhost:'+ port +'/oauth/twitter/callback'
	}
};