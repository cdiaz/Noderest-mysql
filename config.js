module.exports = {
		
	db	: {
		    host: process.env.DB_HOST || 'us-cdbr-iron-east-02.cleardb.net',
		    user: process.env.DB_USERNAME ||'b3e1fe953c2606',
		    password: process.env.DB_PASSWORD || '664ce24e',
		    database: process.env.DB_NAME || 'heroku_bce5a5f738d4c6a'
	}
}	