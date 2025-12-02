
const MAX_DISTANCE_TOLERANCE = 50;


const distanciaGPS = (lat1, lon1, lat2, lon2) => {
		const R = 6371000; // radio terrestre en metros
		const dLat = (lat2 - lat1) * Math.PI / 180;
		const dLon = (lon2 - lon1) * Math.PI / 180;
		const lat1Rad = lat1 * Math.PI / 180;
		const lat2Rad = lat2 * Math.PI / 180;
		const a =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(lat1Rad) *
		Math.cos(lat2Rad) *
		Math.sin(dLon / 2) ** 2;
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		return R * c; // distancia en metros
	};


class Manager {
	static findAlerts(marathon) {
		const runners = marathon.runners;
		let retorno = [];
		//* procesar las distancias, si alguna es menor o igual a MAX_DISTANCE_TOLERANCE agregar el id del corredor
		for (let i = 0; i < runners.length; i++) {
			for (let j = i + 1; j < runners.length; j++) {
				const run1 = runners[i];
				const run2 = runners[j];

				const distancia = distanciaGPS(
					run1.lat, run1.lon,
					run2.lat, run2.lon
				);

				if (distancia <= MAX_DISTANCE_TOLERANCE) {
					// Agregar ambos sin duplicar
					if (!retorno.includes(run1.id)) retorno.push(run1.id);
					if (!retorno.includes(run2.id)) retorno.push(run2.id);
				}
			}
		}
		return retorno;
	}

};


module.exports = Manager;