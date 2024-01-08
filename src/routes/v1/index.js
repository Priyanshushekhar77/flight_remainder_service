const ticketController = require('../../controllers/ticket_cont');


const express = require('express');
const router = express.Router();

router.post('/tickets',ticketController.create);

module.exports = router;