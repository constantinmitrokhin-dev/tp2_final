
const Runner = require('../Runner/Runner');
const Storage = require('../Storage/Storage');


class Marathon {
	constructor() {
		this._runners = Storage.load().map(
			r => new Runner(r._id, r._lat, r._lon)
		);
	}

	get runners() {
		return this._runners;
	}

	addRunner(runner) {
		this._runners.push(runner);
		Storage.save(this._runners);
	}

	processDataImput(id, lat, lon) {
		const runner = this._runners.find(r => r.id === id);
		if (runner) {
			runner.updateGPS(lat, lon);
		} else {
			this.addRunner(new Runner(id, lat, lon));
		}
		Storage.save(this._runners);
	}
}


module.exports = Marathon;
