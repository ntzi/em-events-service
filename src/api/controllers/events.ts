import { Artist } from '../models/artist.js';

const getArtistIds = async (req, res) => {
	const { eventId } = req.params;

	const artists = await Artist.createQueryBuilder('artist')
		.innerJoin('artist.events', 'event')
		.where('event.id = :eventId', { eventId })
		.getMany();

	return res.ok(artists);
};

export { getArtistIds };
