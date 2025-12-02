
const { Router } = require('express');
const router = Router();
const { mdlw_process_data_imput } = require('../middleware/mdlw_runner.js');
const { ctrl_process_runner_data_imput } = require('../controller/ctrl_runner.js');


router.post(
    '/corredores',
	mdlw_process_data_imput,
	ctrl_process_runner_data_imput
);


module.exports = router;
