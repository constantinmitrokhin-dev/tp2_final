
const Marathon = require('../models/Marathon/Marathon.js');


const mdlw_process_data_imput = (req, res, next) => {
	try {
		const marathon = new Marathon();

		const { id, latitud, longitud } = req.body;
		marathon.processDataImput(id, Number(latitud), Number(longitud));
		req.marathon = marathon;
		next();

	} catch (error) {
		res.status(500).json({ errorMsg: "Error procesando datos del corredor" });
	}
}


module.exports = {
	mdlw_process_data_imput
}