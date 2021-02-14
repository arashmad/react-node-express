// -----------------------------
// developed by ARASH
// It's just a boilerplate version
// Nodejs / Expressjs / React.js
//------------------------------


const express = require('express');
const route = express.Router();

route.get('/test', (req, res) => {

	console.log('\n\n_____________________________________ GET');
	console.log('Request Received');
	console.log('Route => /test');

	res.json({msg:'works fine.'});

});

route.post('/test', (req, res) => {

	console.log('\n\n_____________________________________ POST');
	console.log('Request Received');
	console.log('Route => /test');

	const param = req.body.param

	res.json({msg:'works fine.', msg2:`Parameteres <<${param}>> received.`});

});

route.delete('/test', (req, res) => {

	console.log('\n\n_____________________________________ DELETE');
	console.log('Request Received');
	console.log('Route => /stop');

	res.json({msg:'works fine.'});
	
});

route.put('/test', (req, res) => {

	console.log('\n\n_____________________________________ PUT');
	console.log('Request Received');
	console.log('Route => /test');

	res.json({msg:'works fine.'});

});



module.exports = route;