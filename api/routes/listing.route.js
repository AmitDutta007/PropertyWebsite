import express from 'express'
import { createlisting, deletelisting } from '../controllers/listing.controller.js';
import verifyToken from '../utils/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createlisting)
router.delete('/delete/:id', verifyToken, deletelisting)


export default router