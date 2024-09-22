import { Router } from 'express';

import { getArtistIds } from '../controllers/events.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';

const router = Router();

router.get(
	'/v1/events/:eventId/artists',
	isAuthenticated,
	asyncHandler(getArtistIds)
);

export default router;
