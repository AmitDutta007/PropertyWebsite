import express from 'express'
import { createlisting, deletelisting, getListing, getListings, updateListing } from '../controllers/listing.controller.js';
import verifyToken from '../utils/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createlisting)
router.delete('/delete/:id', verifyToken, deletelisting)
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);





export default router