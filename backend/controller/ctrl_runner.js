
const Manager = require('../models/Manager/Manager.js');


const ctrl_process_runner_data_imput = (req, res) => {
	const marathon = req.marathon;

	const alertas = Manager.findAlerts(marathon);

	return res.json({
		msg: "Datos actualizados",
		alertas: alertas
	});
};



module.exports = {
    ctrl_process_runner_data_imput
}