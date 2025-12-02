
class Runner {
	constructor(id, lat, lon){
		this._id = id;
		this._lat = lat;
		this._lon = lon;
	}

	get id() { return this._id; }

	get lat() { return this._lat; }
	set lat(newLat) { return this._lat = newLat; }

	get lon() { return this._lon; }
	set lon(newLon) { return this._lon = newLon; }

	updateGPS(lat, lon) {
		this.lat = lat;
		this.lon = lon;
	}
};


module.exports = Runner;