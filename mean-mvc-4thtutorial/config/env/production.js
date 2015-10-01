// var port = 1337;

var port = normalizePort(process.env.PORT || '8000');
// app.set('port', port);

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
		clientID: '1671331279763296',
		clientSecret: '4e5ad533fc982e29ac55f87cae6e1484',
		callbackURL: 'http://meantodo.com/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'wYilkwNnzhikd7dkdbmU9a34I',
		clientSecret: 'l766h2tbK1sBhbjfnm4xc089MyrfVFgj8kBSEVrY5ONhrYgxj8',
		callbackURL: 'http://meantodo.com/oauth/twitter/callback'
	}
};
