const express = require('express');
const medicalAppController = require('../../controllers/v1/medical-appointment-controllers');

const router = express.Router();

router.post('/create', medicalAppController.createAppointment);
router.post('/update', medicalAppController.updateAppointment);
router.post('/delete', medicalAppController.deleteAppointment);
router.post('/list', medicalAppController.getAppointment);

module.exports = router;