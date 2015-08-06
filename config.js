module.exports = {
		
	db	: {
		    host: process.env.DB_HOST || 'localhost',
		    user: process.env.DB_USERNAME ||'root',
		    password: process.env.DB_PASSWORD || 'root',
		    database: process.env.DB_NAME || 'noderest'
	}
}	