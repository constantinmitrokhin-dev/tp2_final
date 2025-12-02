
const server = require('./backend/server.js');
const PORT = 3002;


async function core_start_server() {
	try {

		// Iniciar servidor
		server.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});

	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
}


core_start_server();
