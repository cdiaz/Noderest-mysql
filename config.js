module.exports = {
		
	db	: {
		host 		: process.env.MYSQL_DB_HOST || '127.0.0.1',
	    user 		: process.env.MYSQL_DB_USERNAME || 'root',
	    password 	: process.env.MYSQL_DB_PASSWORD || 'root',
	    port 		: process.env.MYSQL_DB_PORT || 3306, 
	    database:'noderest'
	},
}	