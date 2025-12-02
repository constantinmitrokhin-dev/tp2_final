
const fs = require('fs');
const path = require('path');
const FILE_PATH = path.join(__dirname, 'runners.json');


class Storage {
	static load() {
		if (!fs.existsSync(FILE_PATH)) return [];
		const data = fs.readFileSync(FILE_PATH);
		return JSON.parse(data);
	}

	static save(runners) {
		fs.writeFileSync(FILE_PATH, JSON.stringify(runners, null, 2));
	}
}


module.exports = Storage;
