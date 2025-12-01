
const fs = require('fs');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } = process.env;
const pgtools = require('pgtools');


async function core_conn_ensure_database(p_db_name) {
	try {
		await pgtools.createdb({
			user: DB_USER,
			password: DB_PASSWORD,
			port: DB_PORT,
			host: DB_HOST
		}, p_db_name);

		console.log(`✅ Database "${p_db_name}" created successfully`);
	} catch (err) {
		if (err.name === 'duplicate_database') {
			console.log(`ℹ️ Database "${p_db_name}" already exists`);
		} else {
			throw err;
		}
	}
}


module.exports = {
	core_conn_ensure_database
};
