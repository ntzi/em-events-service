import { Router } from 'express';

import { getArtistIds } from '../controllers/events.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.get('/v1/events/:eventId/artists', asyncHandler(getArtistIds));

export default router;
